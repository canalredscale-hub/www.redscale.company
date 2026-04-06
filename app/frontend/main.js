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
