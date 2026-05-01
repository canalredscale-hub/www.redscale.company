const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");
const currentYearTargets = document.querySelectorAll("[data-current-year]");
const revealItems = document.querySelectorAll("[data-reveal]");
const centeredScrollTriggers = document.querySelectorAll("[data-scroll-center-target]");
const scrollTopTriggers = document.querySelectorAll("[data-scroll-top]");
const PAGE_TRANSITION_DURATION_MS = 320;
const CONSTRUCTION_PAGE_HREF = "./em-construcao.html";
const CONTACT_PAGE_HREF = "./contato.html";
const INSPECTOR_STORAGE_KEY = "redscale-inspector";
const LEGACY_INSPECTOR_STORAGE_KEY = "greenscale-inspector";
const INSPECTABLE_SELECTOR =
  "[data-placeholder-ref], [data-element-name], a, button, img, h1, h2, h3, h4, p, li, summary, label, input, textarea";

const normalizePathname = (value) => {
  const normalized = (value || "").replace(/\/+/g, "/").replace(/\/$/, "");

  return normalized || "/";
};

const HOME_PAGE_PATHS = new Set(["/", "/index.html"].map(normalizePathname));
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
  window.requestAnimationFrame(() => {
    body.classList.add("is-page-visible");
  });

  window.addEventListener("pageshow", () => {
    body.classList.remove("is-page-leaving");
    body.classList.add("is-page-visible");
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
    body.classList.remove("is-page-visible");
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

const syncHomeHero = () => {
  if (body?.dataset.page !== "home") {
    return;
  }

  const heroSection = document.querySelector(".editorial-hero-section");
  const heroPanel = heroSection?.querySelector(".editorial-hero");
  const heroText = heroSection?.querySelector(".editorial-hero__text");
  const heroBadge = heroText?.querySelector(".editorial-welcome-badge");
  const heroTitle = heroText?.querySelector(".editorial-hero__title");
  const heroLede = heroText?.querySelector(".editorial-hero__lede");

  if (!heroSection || !heroPanel || !heroText || !heroBadge || !heroTitle || !heroLede) {
    return;
  }

  heroSection.dataset.elementName = "Destaque principal";
  heroSection.dataset.placeholderRef = "hero1";

  heroPanel.dataset.elementName = "Mosaico do video em loop";
  heroPanel.dataset.placeholderRef = "hero2";

  heroText.dataset.elementName = "Coluna textual do destaque";
  heroText.dataset.placeholderRef = "hero7";

  heroBadge.dataset.placeholderRef = "hero3";
  heroBadge.innerHTML = `
    <span class="editorial-welcome-badge__mark" aria-hidden="true">_</span>
    <span class="editorial-welcome-badge__text">
      <span>BOAS VINDAS A</span>
      <span class="editorial-welcome-badge__brand">Redscale</span>
    </span>
  `;

  heroTitle.dataset.placeholderRef = "hero4";
  heroTitle.textContent =
    "Desenvolvemos ferramentas que modernizam processos para ganho real de produtividade!";

  heroLede.dataset.placeholderRef = "hero5";
  heroLede.innerHTML = `
    O Grupo Redscale cria sistemas objetivos que solucionam dores de baixa produtividade
    no core estrat&eacute;gico e operacional de empresas que precisam aumentar a
    competitividade. Como? Aplicando o sistema &agrave; opera&ccedil;&atilde;o.
  `;

  let heroActionRail = heroText.querySelector(".editorial-hero__actions");

  if (!heroActionRail) {
    heroActionRail = document.createElement("div");
    heroActionRail.className = "editorial-hero__actions";
  }

  heroActionRail.innerHTML = `
    <a
      class="editorial-hero__action editorial-hero__action--primary"
      href="${CONTACT_PAGE_HREF}"
      data-placeholder-ref="cta1"
    >
      Iniciar um Projeto
    </a>
    <a
      class="editorial-hero__action editorial-hero__action--secondary"
      href="${CONSTRUCTION_PAGE_HREF}"
      data-placeholder-ref="cta2"
    >
      Veja nosso case
    </a>
  `;
  heroLede.insertAdjacentElement("afterend", heroActionRail);

  let capabilityRail = heroText.querySelector(".editorial-hero__capabilities");

  if (!capabilityRail) {
    capabilityRail = document.createElement("div");
    capabilityRail.className = "editorial-hero__capabilities";
  }

  heroActionRail.insertAdjacentElement("afterend", capabilityRail);

  capabilityRail.dataset.elementName = "Especialidades do destaque";
  capabilityRail.dataset.placeholderRef = "hero6";
  capabilityRail.innerHTML = `
    <div class="editorial-capability">
      <span class="editorial-capability__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M4.5 6.5H19.5V15.5H4.5zM9 18.5H15M10.5 15.5V18.5M13.5 15.5V18.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          ></path>
        </svg>
      </span>
      <span class="editorial-capability__label">Infraestrutura &amp; Plataformas Web</span>
    </div>
    <div class="editorial-capability">
      <span class="editorial-capability__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M9 7.5V5.5M15 7.5V5.5M8 10.5H16M8.5 18.5H15.5C17.43 18.5 19 16.93 19 15V11C19 9.07 17.43 7.5 15.5 7.5H8.5C6.57 7.5 5 9.07 5 11V15C5 16.93 6.57 18.5 8.5 18.5ZM10 13.25H10.01M14 13.25H14.01"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          ></path>
        </svg>
      </span>
      <span class="editorial-capability__label">Produto &amp; Design de Interface</span>
    </div>
    <div class="editorial-capability">
      <span class="editorial-capability__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M12 4.5L13.4 8.2L17.5 8.5L14.35 11.1L15.35 15.1L12 13L8.65 15.1L9.65 11.1L6.5 8.5L10.6 8.2L12 4.5ZM6 17.5H18"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          ></path>
        </svg>
      </span>
      <span class="editorial-capability__label">Marca e Identidade Digital</span>
    </div>
    <div class="editorial-capability">
      <span class="editorial-capability__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M7 6.5H13M11 4.5L13 6.5L11 8.5M17 17.5H11M13 15.5L11 17.5L13 19.5M8.5 9.5C10.43 9.5 12 11.07 12 13S10.43 16.5 8.5 16.5S5 14.93 5 13S6.57 9.5 8.5 9.5ZM15.5 7.5C17.43 7.5 19 9.07 19 11S17.43 14.5 15.5 14.5S12 12.93 12 11S13.57 7.5 15.5 7.5Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          ></path>
        </svg>
      </span>
      <span class="editorial-capability__label">Integra&ccedil;&atilde;o e Automa&ccedil;&atilde;o</span>
    </div>
  `;
};

syncHomeHero();

const faqTabs = document.querySelectorAll("[data-faq-category]");
const faqQuestions = document.querySelectorAll("[data-faq-question]");
const faqAnswers = document.querySelectorAll("[data-faq-answer]");
const faqItems = document.querySelectorAll(".faq-item");

const FAQ_CONTENT = {
  product: [
    {
      question: "O que \u00e9 a Redscale e como ela ajuda empresas de TI e ag\u00eancias criativas?",
      answer:
        "Resposta placeholder sobre produto. Vamos substituir este texto pela resposta final depois.",
    },
    {
      question: "Para quais tipos de empresa a Redscale \u00e9 mais indicada?",
      answer:
        "Resposta placeholder sobre perfil de empresa. Vamos ajustar o conte\u00fado final depois.",
    },
    {
      question: "A Redscale pode ser personalizada para combinar com a nossa marca?",
      answer:
        "Resposta placeholder sobre personaliza\u00e7\u00e3o. Este texto ser\u00e1 editado na etapa final.",
    },
    {
      question: "A Redscale suporta m\u00faltiplos servi\u00e7os e projetos?",
      answer:
        "Resposta placeholder sobre servi\u00e7os e projetos. Vamos trocar pela vers\u00e3o correta depois.",
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

if (faqTabs.length && faqQuestions.length) {
  setActiveFaqCategory("product");
}

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

const initProjectsSummaryTracking = () => {
  if (body?.dataset.page !== "home") {
    return;
  }

  const summary = document.querySelector('[data-placeholder-ref="element6"]');
  const stopTarget = document.querySelector('[data-placeholder-ref="element37"]');

  if (!summary || !stopTarget) {
    return;
  }

  let frameId = 0;
  let layout = null;

  const measure = () => {
    const previousTransform = summary.style.transform;
    summary.style.transform = "translateY(0px)";

    const summaryRect = summary.getBoundingClientRect();
    const stopRect = stopTarget.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    layout = {
      startCenter: scrollTop + summaryRect.top + summaryRect.height / 2,
      stopCenter: scrollTop + stopRect.top + stopRect.height / 2,
    };

    summary.style.transform = previousTransform;
  };

  const apply = () => {
    frameId = 0;

    if (!layout) {
      measure();
    }

    if (window.innerWidth <= 991) {
      summary.style.transform = "translateY(0px)";
      return;
    }

    const viewportCenter = window.scrollY + window.innerHeight / 2;
    const boundedCenter = Math.min(
      Math.max(viewportCenter, layout.startCenter),
      layout.stopCenter
    );
    const offset = Math.max(0, boundedCenter - layout.startCenter);

    summary.style.transform = `translateY(${offset.toFixed(2)}px)`;
  };

  const requestApply = () => {
    if (!frameId) {
      frameId = window.requestAnimationFrame(apply);
    }
  };

  measure();
  apply();

  window.addEventListener("scroll", requestApply, { passive: true });
  window.addEventListener("resize", () => {
    measure();
    requestApply();
  });
  window.addEventListener("load", () => {
    measure();
    requestApply();
  });
};

initProjectsSummaryTracking();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

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
const shouldMountInspector =
  inspectParams.has("inspect") || savedInspectorPreference !== null;

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
  inspectBadge.innerHTML = `<strong class="inspect-badge__title"></strong>`;

  const inspectToggle = document.createElement("button");
  inspectToggle.className = "inspect-toggle";
  inspectToggle.type = "button";
  inspectToggle.textContent = "Inspector";
  inspectToggle.setAttribute("aria-pressed", "false");

  document.body.append(inspectBadge, inspectToggle);

  const inspectTitle = inspectBadge.querySelector(".inspect-badge__title");
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

  const showBadge = (target, pointX, pointY) => {
    if (activeInspectedElement !== target) {
      clearInspectedElement();
      activeInspectedElement = target;
      activeInspectedElement.setAttribute("data-inspected", "true");
      inspectTitle.textContent = getElementPlaceholder(target);
    }

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
      hideBadge();
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
      hideBadge();
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
