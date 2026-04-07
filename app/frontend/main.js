const bindOneWayRise = ({
  triggerElement,
  transitionTargetSelector,
  raiseClass,
  resetClass,
}) => {
  const transitionTarget = triggerElement.querySelector(
    transitionTargetSelector
  );

  if (!transitionTarget) {
    return;
  }

  const reset = () => {
    triggerElement.classList.add(resetClass);
    triggerElement.classList.remove(raiseClass);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        triggerElement.classList.remove(resetClass);
        delete triggerElement.dataset.raising;
        delete triggerElement.dataset.raised;
        delete triggerElement.dataset.pointerInside;
      });
    });
  };

  const play = () => {
    triggerElement.dataset.pointerInside = "true";

    if (triggerElement.dataset.raising === "true") {
      return;
    }

    triggerElement.dataset.raising = "true";
    triggerElement.dataset.raised = "false";
    triggerElement.classList.remove(resetClass);
    triggerElement.classList.add(raiseClass);
  };

  const handleExit = () => {
    triggerElement.dataset.pointerInside = "false";

    if (triggerElement.dataset.raised === "true") {
      reset();
    }
  };

  triggerElement.addEventListener("mouseenter", play);
  triggerElement.addEventListener("focus", play);
  triggerElement.addEventListener("mouseleave", handleExit);
  triggerElement.addEventListener("blur", handleExit);

  transitionTarget.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "transform") {
      return;
    }

    if (!triggerElement.classList.contains(raiseClass)) {
      return;
    }

    triggerElement.dataset.raised = "true";

    if (triggerElement.dataset.pointerInside !== "true") {
      reset();
    }
  });
};

const bindReversibleRise = ({ triggerElement, raiseClass }) => {
  const play = () => {
    triggerElement.classList.add(raiseClass);
  };

  const rewind = () => {
    triggerElement.classList.remove(raiseClass);
  };

  triggerElement.addEventListener("mouseenter", play);
  triggerElement.addEventListener("focus", play);
  triggerElement.addEventListener("mouseleave", rewind);
  triggerElement.addEventListener("blur", rewind);
};

const CM_IN_PX = 96 / 2.54;
const ABOUT_SECTION_OFFSET = 1.5 * CM_IN_PX;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
let activeScrollAnimationFrame = null;

const isHomeSurface = () => document.body.id === "home";

const resolveHomeHref = () => {
  const logo = document.querySelector(".site-header__logo");
  const href = logo?.getAttribute("href")?.trim();

  if (!href) {
    return "/";
  }

  return href;
};

const buildHomeLocation = (hash = "") => {
  const base = resolveHomeHref().replace(/#.*$/, "");
  return hash ? `${base}${hash}` : base;
};

const stopActiveScrollAnimation = () => {
  if (activeScrollAnimationFrame === null) {
    return;
  }

  window.cancelAnimationFrame(activeScrollAnimationFrame);
  activeScrollAnimationFrame = null;
};

const easeInOutCubic = (progress) => {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  }

  return 1 - Math.pow(-2 * progress + 2, 3) / 2;
};

const animateScrollTo = (targetY) => {
  const boundedTarget = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - window.innerHeight));
  const startY = window.scrollY;
  const distance = boundedTarget - startY;

  if (Math.abs(distance) < 1) {
    window.scrollTo(0, boundedTarget);
    return;
  }

  if (prefersReducedMotion) {
    window.scrollTo(0, boundedTarget);
    return;
  }

  stopActiveScrollAnimation();

  const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.65));
  const startTime = performance.now();

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeScrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    activeScrollAnimationFrame = null;
  };

  activeScrollAnimationFrame = window.requestAnimationFrame(step);
};

const resolveSectionScrollTarget = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return 0;
  }

  const sectionTop = window.scrollY + section.getBoundingClientRect().top;
  const offset = sectionId === "sobre" ? ABOUT_SECTION_OFFSET : 0;

  return Math.max(0, sectionTop - offset);
};

const updateLocationHash = (hash = "") => {
  if (!window.history.replaceState) {
    return;
  }

  const cleanUrl = hash
    ? `${window.location.pathname}${window.location.search}${hash}`
    : `${window.location.pathname}${window.location.search}`;

  window.history.replaceState(null, "", cleanUrl);
};
const syncAboutEchoHeight = () => {
  const echoStack = document.querySelector(".about__echoes");

  if (!echoStack) {
    return;
  }

  const echoes = Array.from(echoStack.querySelectorAll(".about__echo"));

  if (!echoes.length) {
    return;
  }

  const tallestEcho = echoes.reduce((maxHeight, echo) => {
    return Math.max(maxHeight, echo.offsetHeight);
  }, 0);

  if (tallestEcho <= 0) {
    return;
  }

  echoStack.style.setProperty(
    "--about-echo-stack-height",
    `${Math.ceil(tallestEcho)}px`
  );
};

const syncProofTitleOffset = () => {
  const aboutEyebrow = document.querySelector(".about .section-intro__eyebrow");
  const proofEyebrow = document.querySelector(".proof .section-intro__eyebrow");

  if (!aboutEyebrow || !proofEyebrow) {
    return;
  }

  const offset = aboutEyebrow.offsetWidth - proofEyebrow.offsetWidth;

  document.documentElement.style.setProperty(
    "--proof-title-align-offset",
    `${Math.round(offset)}px`
  );
};

document.querySelectorAll(".site-header__nav-link").forEach((link) => {
  bindOneWayRise({
    triggerElement: link,
    transitionTargetSelector: ".site-header__nav-label--hover",
    raiseClass: "site-header__nav-link--raise",
    resetClass: "site-header__nav-link--instant-reset",
  });
});

document.querySelectorAll(".site-cta").forEach((cta) => {
  bindReversibleRise({
    triggerElement: cta,
    raiseClass: "site-cta--raise",
  });
});

const homeNavLink = document.querySelector("[data-nav-home]");
const aboutNavLink = document.querySelector('[data-nav-section="sobre"]');

if (homeNavLink) {
  homeNavLink.addEventListener("click", (event) => {
    if (!isHomeSurface()) {
      event.preventDefault();
      window.location.assign(buildHomeLocation());
      return;
    }

    event.preventDefault();
    animateScrollTo(0);
    updateLocationHash();
  });
}

if (aboutNavLink) {
  aboutNavLink.addEventListener("click", (event) => {
    if (!isHomeSurface()) {
      event.preventDefault();
      window.location.assign(buildHomeLocation("#sobre"));
      return;
    }

    event.preventDefault();
    animateScrollTo(resolveSectionScrollTarget("sobre"));
    updateLocationHash("#sobre");
  });
}

window.addEventListener("load", () => {
  syncAboutEchoHeight();
  syncProofTitleOffset();

  if (!isHomeSurface()) {
    return;
  }

  if (window.location.hash === "#sobre") {
    window.scrollTo(0, resolveSectionScrollTarget("sobre"));
    return;
  }

  if (window.location.hash === "#home") {
    window.scrollTo(0, 0);
    updateLocationHash();
  }
});

window.addEventListener("resize", () => {
  syncAboutEchoHeight();
  syncProofTitleOffset();
});

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    syncAboutEchoHeight();
  syncProofTitleOffset();
  });
}

syncAboutEchoHeight();

const closeServicesCatalogEntry = (entry) => {
  const trigger = entry.querySelector(".services__catalog-trigger");

  if (!trigger) {
    return;
  }

  entry.classList.remove("services__catalog-entry--open");
  trigger.setAttribute("aria-expanded", "false");
};

document.querySelectorAll(".services__catalog-entry").forEach((entry) => {
  const trigger = entry.querySelector(".services__catalog-trigger");

  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    const isOpen = entry.classList.contains("services__catalog-entry--open");

    document.querySelectorAll(".services__catalog-entry").forEach((otherEntry) => {
      if (otherEntry !== entry) {
        closeServicesCatalogEntry(otherEntry);
      }
    });

    if (isOpen) {
      closeServicesCatalogEntry(entry);
      return;
    }

    entry.classList.add("services__catalog-entry--open");
    trigger.setAttribute("aria-expanded", "true");
  });
});