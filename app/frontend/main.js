const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");
const currentYearTargets = document.querySelectorAll("[data-current-year]");
const sectionRevealTargets = document.querySelectorAll(
  "main > section, .split-article-copy__section"
);
const centeredScrollTriggers = document.querySelectorAll("[data-scroll-center-target]");
const scrollTopTriggers = document.querySelectorAll("[data-scroll-top]");
const PAGE_TRANSITION_DURATION_MS = 320;
const NAV_SECTION_SCROLL_OFFSET_PX = 0.5 * (96 / 2.54);
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/mreyyorn";
const NEWSLETTER_FORM_ENDPOINT = "https://formspree.io/f/xykopqqj";
const INSPECTOR_STORAGE_KEY = "redscale-inspector";
const LEGACY_INSPECTOR_STORAGE_KEY = "greenscale-inspector";
const INSPECTABLE_SELECTOR =
  "[data-placeholder-ref], [data-element-name], a, button, img, h1, h2, h3, h4, p, li, summary, label, input, textarea";

const normalizePathname = (value) => {
  const normalized = (value || "").replace(/\/+/g, "/").replace(/\/$/, "");

  return normalized || "/";
};

const HOME_PAGE_PATHS = new Set(["/", "/home.html"].map(normalizePathname));
const isModifiedNavigationEvent = (event) =>
  event.defaultPrevented ||
  event.button !== 0 ||
  event.metaKey ||
  event.ctrlKey ||
  event.shiftKey ||
  event.altKey;

const getNavigableUrlFromLink = (link) => {
  const rawHref = link?.getAttribute("href");

  if (!rawHref || rawHref.startsWith("#")) {
    return null;
  }

  const url = new URL(rawHref, window.location.href);
  const pathname = normalizePathname(url.pathname);

  if (url.origin !== window.location.origin) {
    return null;
  }

  return url;
};

if (body) {
  window.addEventListener("pageshow", () => {
    body.classList.remove("is-page-leaving");
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link || isModifiedNavigationEvent(event)) {
      return;
    }

    if (
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      link.getAttribute("rel") === "external"
    ) {
      return;
    }

    const destinationUrl = getNavigableUrlFromLink(link);

    if (!destinationUrl) {
      return;
    }

    const currentUrl = new URL(window.location.href);
    const destinationPathname = normalizePathname(destinationUrl.pathname);
    const currentPathname = normalizePathname(currentUrl.pathname);
    const isSameDocumentNavigation =
      destinationUrl.origin === currentUrl.origin &&
      destinationPathname === currentPathname &&
      destinationUrl.search === currentUrl.search &&
      destinationUrl.hash === currentUrl.hash;

    if (isSameDocumentNavigation) {
      return;
    }

    event.preventDefault();
    body.classList.add("is-page-leaving");

    window.setTimeout(() => {
      window.location.assign(destinationUrl.toString());
    }, PAGE_TRANSITION_DURATION_MS);
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

currentYearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const initRedsightsFilters = () => {
  const filterButtons = document.querySelectorAll("[data-redsights-filter]");
  const redsightsCards = document.querySelectorAll(
    ".redsights-index .blog-card"
  );
  const emptyMessage = document.querySelector("[data-redsights-empty]");

  if (!filterButtons.length || !redsightsCards.length) {
    return;
  }

  const normalizeFilterValue = (value) => (value || "").trim().toUpperCase();
  const getCardCategories = (card) => {
    const explicitCategories = card.dataset.redsightsCategory || "";
    const visibleCategories = Array.from(
      card.querySelectorAll(".blog-card__category")
    )
      .map((category) => category.textContent)
      .join("|");

    return Array.from(
      new Set(
        `${explicitCategories}|${visibleCategories}`
          .split("|")
          .map(normalizeFilterValue)
          .filter(Boolean)
      )
    );
  };

  redsightsCards.forEach((card) => {
    card.dataset.redsightsCategory = getCardCategories(card).join("|");
  });

  const applyFilter = (value) => {
    const activeValue = normalizeFilterValue(value);

    filterButtons.forEach((button) => {
      const matchesActiveFilter =
        normalizeFilterValue(button.dataset.redsightsFilter) === activeValue;

      button.classList.toggle("redsights-filter--active", matchesActiveFilter);
      button.setAttribute("aria-pressed", matchesActiveFilter ? "true" : "false");
    });

    let visibleCardCount = 0;

    redsightsCards.forEach((card) => {
      const cardCategories = getCardCategories(card);
      const isHidden =
        activeValue !== "TODOS" && !cardCategories.includes(activeValue);

      card.hidden = isHidden;

      if (!isHidden) {
        visibleCardCount += 1;
      }
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleCardCount > 0;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.redsightsFilter);
    });
  });

  const initiallyActiveButton =
    Array.from(filterButtons).find((button) =>
      button.classList.contains("redsights-filter--active")
    ) || filterButtons[0];

  applyFilter(initiallyActiveButton?.dataset.redsightsFilter || "Todos");
};

initRedsightsFilters();

const initRedsightsNewsletter = () => {
  const newsletterForms = document.querySelectorAll("[data-redsights-newsletter-form]");

  newsletterForms.forEach((form) => {
    form.action = NEWSLETTER_FORM_ENDPOINT;

    const emailInput = form.querySelector("[data-redsights-newsletter-email]");
    const submitButton = form.querySelector("[data-redsights-newsletter-submit]");
    const successMessage = form.querySelector("[data-redsights-newsletter-success]");

    if (!emailInput || !submitButton || !successMessage) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        emailInput.focus();
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Processando";

      try {
        const response = await fetch(NEWSLETTER_FORM_ENDPOINT, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Newsletter submit failed");
        }

        form.classList.add("redsights-newsletter--submitted");
        successMessage.hidden = false;
        successMessage.focus();
        form.reset();
      } catch (error) {
        submitButton.disabled = false;
        submitButton.textContent = "Tentar novamente";
      }
    });
  });
};

initRedsightsNewsletter();

const initContactForms = () => {
  const contactForms = document.querySelectorAll("[data-contact-form]");

  contactForms.forEach((form) => {
    form.action = CONTACT_FORM_ENDPOINT;

    const submitButton = form.querySelector('[data-placeholder-ref="element137"]');
    const submitLabel = form.querySelector('[data-placeholder-ref="cta8"]');

    if (!submitButton || !submitLabel) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submitButton.disabled = true;
      submitLabel.textContent = "Enviando...";

      try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Contact submit failed");
        }

        form.reset();
        submitLabel.textContent = "Obrigado! Em breve te responderemos!";
      } catch (error) {
        submitButton.disabled = false;
        submitLabel.textContent = "Tentar novamente";
      }
    });
  });
};

initContactForms();

const initArticlePage = () => {
  const progressBar = document.querySelector("[data-reading-progress]");
  const shareButtons = document.querySelectorAll("[data-share-action]");

  if (progressBar) {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(window.scrollY / scrollableHeight, 1)
          : 0;

      progressBar.style.transform = `scaleX(${progress})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  shareButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.shareAction;
      const shareUrl = window.location.href;
      const shareTitle = document.title;
      const encodedUrl = encodeURIComponent(shareUrl);
      const encodedTitle = encodeURIComponent(shareTitle);
      const shareTargets = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      };

      if (action === "copy") {
        try {
          await navigator.clipboard.writeText(shareUrl);
          button.textContent = "Link copiado";
        } catch (_error) {
          button.textContent = "Copie pela barra";
        }

        window.setTimeout(() => {
          button.textContent = "Copiar link";
        }, 1800);
        return;
      }

      if (shareTargets[action]) {
        window.open(shareTargets[action], "_blank", "noopener,noreferrer");
      }
    });
  });
};

initArticlePage();

const faqTabs = document.querySelectorAll("[data-faq-category]");
const faqQuestions = document.querySelectorAll("[data-faq-question]");
const faqAnswers = document.querySelectorAll("[data-faq-answer]");
const faqItems = document.querySelectorAll(".faq-item");

const FAQ_CONTENT = {
  product: [
    {
      question: "O que \u00e9 o grupo Redscale e como voc\u00eas ajudam empresas e ag\u00eancias a crescer?",
      answer:
        "O grupo Redscale nasceu de um objetivo simples: auxiliar no crescimento utilizando tecnologia de ponta. Oferecemos uma parceria por projeto ou de forma continuada. Atrav\u00e9s de um framework desenvolvido internamente, faremos diversas perguntas (estrat\u00e9gicas e operacionais) sobre o neg\u00f3cio, e os resultados v\u00e3o nos indicar quais as solu\u00e7\u00f5es s\u00e3o mais adequadas para atingirmos o objetivo. O simples funciona.",
    },
    {
      question: "Para quais tipos de empresa a Redscale \u00e9 mais indicada?",
      answer:
        "No geral, o processo de ganho de produtividade acontece antes da an\u00e1lise de segmento, porque tem a ver com o direcionamento correto e objetivo das atividades da gest\u00e3o e da equipe. Produtividade \u00e9 uma m\u00e9trica de {qualidade do trabalho entregue vs tempo que ele foi feito}; se encurtarmos o tempo e aumentar a qualidade, o seu neg\u00f3cio sentir\u00e1 o impacto independente da \u00e1rea. Entretanto existem fatores de impacto, como quantidade de pessoas na equipe, e o n\u00edvel de imers\u00e3o digital do neg\u00f3cio.",
    },
    {
      question: "A Redscale pode ser personalizada para combinar com a nossa marca?",
      answer:
        "Apenas personalizamos a entrega com o seu logo, seu branding, etc. se houver a ado\u00e7\u00e3o no plano de melhoria continuada.",
    },
    {
      question: "A Redscale suporta m\u00faltiplos servi\u00e7os e projetos?",
      answer:
        "Nos sentimos a vontade com desafios. Quanto mais, melhor. Dependendo do seu contexto, muitas vezes pode acontecer de uma solu\u00e7\u00e3o resolver diversos problemas menores. No geral, grandes complexidades s\u00e3o bolas de neve que come\u00e7aram com um gargalo simples de ser resolvido. O gargalo muitas vezes fica na opera\u00e7\u00e3o como legado e n\u00e3o chega a diretoria. A identifica\u00e7\u00e3o desse gargalo e a aplica\u00e7\u00e3o da nossa solu\u00e7\u00e3o pode, gradualmente, ir resolvendo muitos problemas ao longo do tempo.",
    },
  ],
  support: [
    {
      question: "Como funciona o suporte depois que o projeto \u00e9 entregue?",
      answer:
        "Resposta placeholder sobre suporte p\u00f3s-entrega. Vamos inserir a pol\u00edtica correta depois.",
    },
    {
      question: "Existe acompanhamento durante a implanta\u00e7\u00e3o?",
      answer:
        "Resposta placeholder sobre acompanhamento. Este texto ser\u00e1 refinado com as condi\u00e7\u00f5es finais.",
    },
    {
      question: "Quais canais de atendimento ficam dispon\u00edveis para o cliente?",
      answer:
        "Resposta placeholder sobre canais de suporte. Vamos editar com os canais oficiais depois.",
    },
    {
      question: "A Redscale ajuda o time interno a usar a solu\u00e7\u00e3o?",
      answer:
        "Resposta placeholder sobre treinamento e ado\u00e7\u00e3o. Vamos trocar pela resposta definitiva depois.",
    },
  ],
  payments: [
    {
      question: "Como funciona o pagamento dos projetos?",
      answer:
        "Resposta placeholder sobre pagamento. Vamos preencher os formatos aceitos depois.",
    },
    {
      question: "Os planos podem ser pagos mensalmente?",
      answer:
        "Resposta placeholder sobre recorr\u00eancia. Este conte\u00fado ser\u00e1 ajustado ap\u00f3s a defini\u00e7\u00e3o comercial.",
    },
    {
      question: "O or\u00e7amento muda conforme o escopo?",
      answer:
        "Resposta placeholder sobre varia\u00e7\u00e3o de escopo. Vamos inserir a regra correta depois.",
    },
    {
      question: "Existe cobran\u00e7a de manuten\u00e7\u00e3o ou suporte cont\u00ednuo?",
      answer:
        "Resposta placeholder sobre manuten\u00e7\u00e3o. Vamos substituir pela resposta final depois.",
    },
  ],
};

const setActiveFaqCategory = (category) => {
  const content = FAQ_CONTENT[category] || FAQ_CONTENT.product;

  faqTabs.forEach((tab) => {
    const isActive = tab.dataset.faqCategory === category;

    tab.classList.toggle("faq-tab--active", isActive);
    tab.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  faqItems.forEach((item) => {
    item.removeAttribute("open");
  });

  content.forEach((item, index) => {
    if (faqQuestions[index]) {
      faqQuestions[index].textContent = item.question;
    }

    if (faqAnswers[index]) {
      faqAnswers[index].textContent = item.answer;
    }
  });
};

faqTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveFaqCategory(tab.dataset.faqCategory);
  });
});

const setupFaqMotion = () => {
  const animatedFaqItems = document.querySelectorAll(".faq-item");

  animatedFaqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const answer = item.querySelector("p");

    if (!summary || !answer) {
      return;
    }

    answer.style.overflow = "hidden";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (item.dataset.faqAnimating === "true") {
        return;
      }

      item.dataset.faqAnimating = "true";

      if (item.open) {
        const startHeight = answer.scrollHeight;

        answer.style.height = `${startHeight}px`;
        answer.style.opacity = "1";

        requestAnimationFrame(() => {
          answer.style.transition = "height 220ms ease, opacity 180ms ease, transform 220ms ease";
          answer.style.height = "0px";
          answer.style.opacity = "0";
          answer.style.transform = "translateY(-6px)";
        });

        window.setTimeout(() => {
          item.removeAttribute("open");
          answer.style.height = "";
          answer.style.opacity = "";
          answer.style.transform = "";
          answer.style.transition = "";
          delete item.dataset.faqAnimating;
        }, 230);

        return;
      }

      item.setAttribute("open", "");
      answer.style.height = "0px";
      answer.style.opacity = "0";
      answer.style.transform = "translateY(-6px)";

      requestAnimationFrame(() => {
        answer.style.transition = "height 220ms ease, opacity 180ms ease, transform 220ms ease";
        answer.style.height = `${answer.scrollHeight}px`;
        answer.style.opacity = "1";
        answer.style.transform = "translateY(0)";
      });

      window.setTimeout(() => {
        answer.style.height = "";
        answer.style.opacity = "";
        answer.style.transform = "";
        answer.style.transition = "";
        delete item.dataset.faqAnimating;
      }, 230);
    });
  });
};

setupFaqMotion();

const getScrollTarget = (targetSelector) => {
  if (!targetSelector) {
    return null;
  }

  try {
    return document.querySelector(targetSelector);
  } catch (error) {
    return null;
  }
};

const scrollToTargetWithOffset = (target, behavior = "smooth") => {
  if (!target) {
    return;
  }

  const targetTop = window.scrollY + target.getBoundingClientRect().top;

  window.scrollTo({
    top: Math.max(0, targetTop - NAV_SECTION_SCROLL_OFFSET_PX),
    behavior,
  });
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll-offset-target]");

  if (!trigger || isModifiedNavigationEvent(event)) {
    return;
  }

  const targetSelector = trigger.dataset.scrollOffsetTarget;
  const target = getScrollTarget(targetSelector);

  if (!target) {
    return;
  }

  event.preventDefault();
  scrollToTargetWithOffset(target);

  if (window.history?.replaceState) {
    window.history.replaceState(null, "", targetSelector);
  }
});

centeredScrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetSelector = trigger.dataset.scrollCenterTarget;

    if (!targetSelector) {
      return;
    }

    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    event.preventDefault();

    const targetTop = window.scrollY + target.getBoundingClientRect().top;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    if (window.history?.replaceState) {
      window.history.replaceState(null, "", targetSelector);
    }
  });
});

if (window.location.hash) {
  const target = getScrollTarget(window.location.hash);

  if (target) {
    window.requestAnimationFrame(() => {
      scrollToTargetWithOffset(target, "auto");
    });
  }
}

scrollTopTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.history?.replaceState) {
      window.history.replaceState(null, "", window.location.pathname || "./");
    }
  });
});

const initProjectGalleryLightbox = () => {
  const galleryTriggers = document.querySelectorAll("[data-project-gallery-trigger]");
  const lightbox = document.querySelector("[data-project-gallery-lightbox]");
  const lightboxImage = document.querySelector("[data-project-gallery-lightbox-image]");
  const closeButton = document.querySelector("[data-project-gallery-close]");
  let activeTrigger = null;

  if (!galleryTriggers.length || !lightbox || !lightboxImage || !closeButton) {
    return;
  }

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    body.classList.remove("project-gallery-lightbox-open");

    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger = null;
    }
  };

  const openLightbox = (trigger) => {
    const imageSource = trigger.dataset.gallerySrc;

    if (!imageSource) {
      return;
    }

    activeTrigger = trigger;
    lightboxImage.src = imageSource;
    lightboxImage.alt = trigger.dataset.galleryAlt || "";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    body.classList.add("project-gallery-lightbox-open");
    closeButton.focus();
  };

  galleryTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openLightbox(trigger);
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest("[data-project-gallery-close]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
};

initProjectGalleryLightbox();

const revealSections = () => {
  if (!sectionRevealTargets.length) {
    return;
  }

  const showSection = (section) => {
    section.classList.add("is-section-visible");
  };

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    sectionRevealTargets.forEach(showSection);
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        showSection(entry.target);
        sectionObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    }
  );

  sectionRevealTargets.forEach((section) => sectionObserver.observe(section));
};

revealSections();

const getSavedInspectorPreference = () => {
  try {
    const savedPreference = window.localStorage.getItem(INSPECTOR_STORAGE_KEY);

    if (savedPreference !== null) {
      return savedPreference;
    }

    return window.localStorage.getItem(LEGACY_INSPECTOR_STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const inspectParams = new URLSearchParams(window.location.search);
const savedInspectorPreference = getSavedInspectorPreference();
const shouldMountInspector = true;

const isInspectorEnabledByDefault = () => {
  if (inspectParams.get("inspect") === "1") {
    return true;
  }

  if (inspectParams.get("inspect") === "0") {
    return false;
  }

  return savedInspectorPreference === "on";
};

const getElementTextSnippet = (value, maxLength = 54) => {
  const normalized = (value || "").replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "";
  }

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}...`;
};

const deriveElementLabel = (element) => {
  if (!element) {
    return "";
  }

  if (element.dataset.elementName) {
    return element.dataset.elementName;
  }

  const snippet = getElementTextSnippet(
    element.getAttribute("aria-label") ||
      element.getAttribute("alt") ||
      element.textContent
  );

  if (element.matches("a")) {
    return snippet ? `Link: ${snippet}` : "Link";
  }

  if (element.matches("button")) {
    return snippet ? `Botão: ${snippet}` : "Botão";
  }

  if (element.matches("img")) {
    return snippet ? `Imagem: ${snippet}` : "Imagem";
  }

  if (element.matches("h1, h2, h3, h4, h5, h6")) {
    return snippet ? `Título: ${snippet}` : "Título";
  }

  if (element.matches("p, li, summary, label, span")) {
    return snippet ? `Texto: ${snippet}` : "Texto";
  }

  const className = Array.from(element.classList).find(Boolean);

  if (className) {
    return `Elemento .${className}`;
  }

  return element.tagName.toLowerCase();
};

const normalizePlaceholderText = (value) => {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

const slugifyPlaceholderBase = (value) => {
  const normalized = normalizePlaceholderText(value)
    .replace(/&/g, " e ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "elemento";
};

const PLACEHOLDER_REFERENCE_PATTERN = /^([a-z]+)(\d+)$/;

const normalizePlaceholderReference = (value) => {
  const normalized = normalizePlaceholderText(value).replace(/[^a-z0-9]+/g, "");

  return PLACEHOLDER_REFERENCE_PATTERN.test(normalized) ? normalized : "";
};

const trackPlaceholderReference = (reference, counters, usedReferences) => {
  if (!reference) {
    return;
  }

  const match = reference.match(PLACEHOLDER_REFERENCE_PATTERN);

  if (!match) {
    return;
  }

  const [, placeholderBase, placeholderIndexValue] = match;
  const placeholderIndex = Number(placeholderIndexValue);
  const highestTrackedIndex = counters.get(placeholderBase) || 0;

  counters.set(placeholderBase, Math.max(highestTrackedIndex, placeholderIndex));
  usedReferences.add(reference);
};

const getFixedPlaceholderReference = (element) => {
  if (!element) {
    return "";
  }

  return normalizePlaceholderReference(
    element.dataset.placeholderRef || element.getAttribute("data-placeholder-ref")
  );
};

const buildSequentialPlaceholderReference = (placeholderBase, counters, usedReferences) => {
  let nextIndex = (counters.get(placeholderBase) || 0) + 1;
  let placeholderReference = `${placeholderBase}${nextIndex}`;

  while (usedReferences.has(placeholderReference)) {
    nextIndex += 1;
    placeholderReference = `${placeholderBase}${nextIndex}`;
  }

  counters.set(placeholderBase, nextIndex);
  usedReferences.add(placeholderReference);

  return placeholderReference;
};

const includesAnyKeyword = (value, keywords) =>
  keywords.some((keyword) => value.includes(keyword));

const isCallToActionElement = (element) => {
  if (!element) {
    return false;
  }

  return (
    element.matches("button, [role='button']") ||
    element.classList.contains("button") ||
    element.classList.contains("site-cta") ||
    element.classList.contains("featured-product__cta") ||
    element.classList.contains("greenscale-final-cta__button")
  );
};

const getCompactPlaceholderBase = (element) => {
  if (!element) {
    return "element";
  }

  const descriptor = normalizePlaceholderText(
    [
      element.dataset.elementName,
      element.getAttribute("aria-label"),
      element.getAttribute("alt"),
      element.id,
      element.name,
      ...Array.from(element.classList),
    ]
      .filter(Boolean)
      .join(" ")
  );

  if (element.classList.contains("editorial-welcome-badge")) {
    return "hero";
  }

  if (
    includesAnyKeyword(descriptor, ["logo", "brand"]) &&
    element.matches("a, div, span")
  ) {
    return "logo";
  }

  if (includesAnyKeyword(descriptor, ["cabecalho", "header"]) || element.matches("header")) {
    return "header";
  }

  if (includesAnyKeyword(descriptor, ["rodape", "footer"]) || element.matches("footer")) {
    return "footer";
  }

  if (includesAnyKeyword(descriptor, ["hero", "destaque"]) || element.className.includes("hero")) {
    return "hero";
  }

  if (isCallToActionElement(element)) {
    return "cta";
  }

  if (includesAnyKeyword(descriptor, ["menu", "navegacao", "nav"]) || element.matches("nav")) {
    return "nav";
  }

  if (includesAnyKeyword(descriptor, ["faq"]) || element.matches("details")) {
    return "faq";
  }

  if (
    includesAnyKeyword(descriptor, ["formulario", "form"]) ||
    element.matches("form")
  ) {
    return "form";
  }

  if (
    includesAnyKeyword(descriptor, ["campo", "input", "textarea", "nome", "empresa", "mensagem"]) ||
    element.matches("input, textarea")
  ) {
    return "field";
  }

  if (
    includesAnyKeyword(descriptor, ["imagem", "image", "media", "foto"]) ||
    element.matches("img, figure")
  ) {
    return "image";
  }

  if (
    includesAnyKeyword(descriptor, ["painel", "panel", "dashboard", "preview", "card", "bloco"]) ||
    element.matches("article, aside")
  ) {
    return "card";
  }

  if (includesAnyKeyword(descriptor, ["lista", "list"]) || element.matches("ul, ol")) {
    return "list";
  }

  if (element.matches("h1, h2, h3, h4, h5, h6")) {
    return "title";
  }

  if (element.matches("a")) {
    return "link";
  }

  if (element.matches("p, li, summary, label, span")) {
    return "text";
  }

  if (includesAnyKeyword(descriptor, ["secao", "section"]) || element.matches("section")) {
    return "section";
  }

  return "element";
};

const assignElementPlaceholders = () => {
  const counters = new Map();
  const usedReferences = new Set();
  const inspectableElements = document.querySelectorAll(INSPECTABLE_SELECTOR);

  inspectableElements.forEach((element) => {
    const fixedReference = getFixedPlaceholderReference(element);

    if (!fixedReference) {
      return;
    }

    trackPlaceholderReference(fixedReference, counters, usedReferences);
    element.dataset.elementPlaceholder = fixedReference;
  });

  inspectableElements.forEach((element) => {
    if (element.dataset.elementPlaceholder) {
      return;
    }

    const placeholderBase = getCompactPlaceholderBase(element);
    const placeholderReference = buildSequentialPlaceholderReference(
      placeholderBase,
      counters,
      usedReferences
    );

    element.dataset.elementPlaceholder = placeholderReference;
  });
};

const getElementPlaceholder = (element) => {
  if (!element) {
    return "";
  }

  return (
    element.dataset.elementPlaceholder ||
    `${getCompactPlaceholderBase(element)}1`
  );
};

assignElementPlaceholders();

const resolveInspectableTarget = (initialTarget, inspectBadge, inspectToggle) => {
  let node =
    initialTarget instanceof Element ? initialTarget : initialTarget?.parentElement || null;

  while (node && node !== document.body) {
    if (node === inspectBadge || node === inspectToggle) {
      return null;
    }

    if (
      node.matches(INSPECTABLE_SELECTOR)
    ) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
};

const moveBadge = (inspectBadge, clientX, clientY) => {
  const offset = 18;
  const maxX = window.innerWidth - inspectBadge.offsetWidth - 16;
  const maxY = window.innerHeight - inspectBadge.offsetHeight - 16;
  const x = Math.max(16, Math.min(maxX, clientX + offset));
  const y = Math.max(16, Math.min(maxY, clientY + offset));

  inspectBadge.style.transform = `translate(${x}px, ${y}px)`;
};

if (shouldMountInspector) {
  const inspectBadge = document.createElement("div");
  inspectBadge.className = "inspect-badge";
  inspectBadge.setAttribute("aria-hidden", "true");
  inspectBadge.innerHTML = `
    <strong class="inspect-badge__title"></strong>
    <span class="inspect-badge__meta"></span>
  `;

  const inspectToggle = document.createElement("button");
  inspectToggle.className = "inspect-toggle";
  inspectToggle.type = "button";
  inspectToggle.textContent = "Inspector";
  inspectToggle.setAttribute("aria-pressed", "false");

  document.body.append(inspectBadge, inspectToggle);

  const inspectTitle = inspectBadge.querySelector(".inspect-badge__title");
  const inspectMeta = inspectBadge.querySelector(".inspect-badge__meta");
  let inspectorEnabled = false;
  let activeInspectedElement = null;

  const clearInspectedElement = () => {
    if (!activeInspectedElement) {
      return;
    }

    activeInspectedElement.removeAttribute("data-inspected");
    activeInspectedElement = null;
  };

  const hideBadge = () => {
    clearInspectedElement();
    inspectBadge.classList.remove("is-visible");
    inspectTitle.textContent = "";
    inspectMeta.textContent = "";
  };

  const updateInspectorState = (enabled) => {
    inspectorEnabled = enabled;
    inspectToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
    inspectToggle.textContent = enabled ? "Inspector ligado" : "Inspector";
    body.classList.toggle("inspector-on", enabled);

    try {
      window.localStorage.setItem(
        INSPECTOR_STORAGE_KEY,
        enabled ? "on" : "off"
      );
    } catch (error) {
      // Sem persistência local disponível.
    }

    if (!enabled) {
      hideBadge();
    }
  };

  const getPointerPositionLabel = (pointX, pointY) =>
    `posi\u00e7\u00e3o: (${Math.round(pointX)}, ${Math.round(pointY)})`;

  const showBadge = (target, pointX, pointY) => {
    if (!target) {
      clearInspectedElement();
      inspectTitle.textContent = "Mouse";
    } else if (activeInspectedElement !== target) {
      clearInspectedElement();
      activeInspectedElement = target;
      activeInspectedElement.setAttribute("data-inspected", "true");
      inspectTitle.textContent = getElementPlaceholder(target);
    }

    inspectMeta.textContent = getPointerPositionLabel(pointX, pointY);
    moveBadge(inspectBadge, pointX, pointY);
    inspectBadge.classList.add("is-visible");
  };

  document.addEventListener("pointermove", (event) => {
    if (!inspectorEnabled) {
      return;
    }

    const target = resolveInspectableTarget(
      event.target,
      inspectBadge,
      inspectToggle
    );

    if (!target) {
      showBadge(null, event.clientX, event.clientY);
      return;
    }

    showBadge(target, event.clientX, event.clientY);
  });

  document.addEventListener("pointerdown", (event) => {
    if (!inspectorEnabled) {
      return;
    }

    const target = resolveInspectableTarget(
      event.target,
      inspectBadge,
      inspectToggle
    );

    if (!target) {
      showBadge(null, event.clientX, event.clientY);
      return;
    }

    showBadge(target, event.clientX, event.clientY);
  });

  document.addEventListener("focusin", (event) => {
    if (!inspectorEnabled) {
      return;
    }

    const target = resolveInspectableTarget(
      event.target,
      inspectBadge,
      inspectToggle
    );

    if (!target) {
      return;
    }

    showBadge(target, window.innerWidth / 2, window.innerHeight - 110);
  });

  document.addEventListener("focusout", () => {
    if (!inspectorEnabled) {
      return;
    }

    hideBadge();
  });

  window.addEventListener("blur", hideBadge);

  inspectToggle.addEventListener("click", () => {
    updateInspectorState(!inspectorEnabled);
  });

  window.addEventListener("keydown", (event) => {
    const isTypingField =
      event.target instanceof Element &&
      event.target.matches("input, textarea, select, [contenteditable='true']");

    if (isTypingField) {
      return;
    }

    if (event.key.toLowerCase() === "i") {
      updateInspectorState(!inspectorEnabled);
      return;
    }

    if (event.key === "Escape") {
      hideBadge();
    }
  });

  updateInspectorState(isInspectorEnabledByDefault());
}
