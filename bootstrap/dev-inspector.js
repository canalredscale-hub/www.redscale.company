(() => {
  const body = document.body;
  const INSPECTOR_STORAGE_KEY = "redscale-inspector";
  const LEGACY_INSPECTOR_STORAGE_KEY = "greenscale-inspector";
  const INSPECTOR_SESSION_STORAGE_KEY = "redscale-inspector-session";
  const INSPECTABLE_SELECTOR =
    "[data-placeholder-ref], [data-element-name], a, button, img, h1, h2, h3, h4, p, li, summary, label, input, textarea";

  if (!body) {
    return;
  }

  const inspectParams = new URLSearchParams(window.location.search);
  const isLocalInspectorHost = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);

  if (!isLocalInspectorHost) {
    return;
  }

  const getStorageValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  const setSession = (enabled) => {
    try {
      if (enabled) {
        window.localStorage.setItem(INSPECTOR_SESSION_STORAGE_KEY, "on");
        return;
      }

      window.localStorage.removeItem(INSPECTOR_SESSION_STORAGE_KEY);
    } catch (error) {
      // Sem persistencia local disponivel.
    }
  };

  if (inspectParams.get("inspect") === "1") {
    setSession(true);
  }

  if (inspectParams.get("inspect") === "0") {
    setSession(false);
  }

  const shouldMountInspector =
    inspectParams.get("inspect") !== "0" &&
    (inspectParams.get("inspect") === "1" ||
      getStorageValue(INSPECTOR_SESSION_STORAGE_KEY) === "on");

  if (!shouldMountInspector) {
    return;
  }

  const getSavedInspectorPreference = () =>
    getStorageValue(INSPECTOR_STORAGE_KEY) ?? getStorageValue(LEGACY_INSPECTOR_STORAGE_KEY);

  const isInspectorEnabledByDefault = () => {
    if (inspectParams.get("inspect") === "1") {
      return true;
    }

    if (inspectParams.get("inspect") === "0") {
      return false;
    }

    return getSavedInspectorPreference() === "on";
  };

  const normalizePlaceholderText = (value) =>
    (value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

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

  const normalizePlaceholderReference = (value) => {
    const normalized = normalizePlaceholderText(value).replace(/[^a-z0-9]+/g, "");

    return /^([a-z]+)(\d+)$/.test(normalized) ? normalized : "";
  };

  const includesAnyKeyword = (value, keywords) =>
    keywords.some((keyword) => value.includes(keyword));

  const isCallToActionElement = (element) =>
    element?.matches("button, [role='button']") ||
    element?.classList.contains("button") ||
    element?.classList.contains("site-cta") ||
    element?.classList.contains("featured-product__cta") ||
    element?.classList.contains("greenscale-final-cta__button");

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

    if (includesAnyKeyword(descriptor, ["logo", "brand"]) && element.matches("a, div, span")) {
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

    if (includesAnyKeyword(descriptor, ["formulario", "form"]) || element.matches("form")) {
      return "form";
    }

    if (
      includesAnyKeyword(descriptor, ["campo", "input", "textarea", "nome", "empresa", "mensagem"]) ||
      element.matches("input, textarea")
    ) {
      return "field";
    }

    if (includesAnyKeyword(descriptor, ["imagem", "image", "media", "foto"]) || element.matches("img, figure")) {
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
      const fixedReference = normalizePlaceholderReference(
        element.dataset.placeholderRef || element.getAttribute("data-placeholder-ref")
      );

      if (!fixedReference) {
        return;
      }

      const [, placeholderBase, placeholderIndexValue] = fixedReference.match(/^([a-z]+)(\d+)$/);
      const placeholderIndex = Number(placeholderIndexValue);

      counters.set(placeholderBase, Math.max(counters.get(placeholderBase) || 0, placeholderIndex));
      usedReferences.add(fixedReference);
      element.dataset.elementPlaceholder = fixedReference;
    });

    inspectableElements.forEach((element) => {
      if (element.dataset.elementPlaceholder) {
        return;
      }

      const placeholderBase = getCompactPlaceholderBase(element);
      let nextIndex = (counters.get(placeholderBase) || 0) + 1;
      let placeholderReference = `${placeholderBase}${nextIndex}`;

      while (usedReferences.has(placeholderReference)) {
        nextIndex += 1;
        placeholderReference = `${placeholderBase}${nextIndex}`;
      }

      counters.set(placeholderBase, nextIndex);
      usedReferences.add(placeholderReference);
      element.dataset.elementPlaceholder = placeholderReference;
    });
  };

  const getElementPlaceholder = (element) =>
    element?.dataset.elementPlaceholder || `${getCompactPlaceholderBase(element)}1`;

  const resolveInspectableTarget = (initialTarget, inspectBadge, inspectToggle) => {
    let node = initialTarget instanceof Element ? initialTarget : initialTarget?.parentElement || null;

    while (node && node !== document.body) {
      if (node === inspectBadge || node === inspectToggle) {
        return null;
      }

      if (node.matches(INSPECTABLE_SELECTOR)) {
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

  assignElementPlaceholders();

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
      window.localStorage.setItem(INSPECTOR_STORAGE_KEY, enabled ? "on" : "off");
    } catch (error) {
      // Sem persistencia local disponivel.
    }

    if (!enabled) {
      hideBadge();
    }
  };

  const getPointerPositionLabel = (pointX, pointY) =>
    `posicao: (${Math.round(pointX)}, ${Math.round(pointY)})`;

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

    const target = resolveInspectableTarget(event.target, inspectBadge, inspectToggle);
    showBadge(target, event.clientX, event.clientY);
  });

  document.addEventListener("pointerdown", (event) => {
    if (!inspectorEnabled) {
      return;
    }

    const target = resolveInspectableTarget(event.target, inspectBadge, inspectToggle);
    showBadge(target, event.clientX, event.clientY);
  });

  document.addEventListener("focusin", (event) => {
    if (!inspectorEnabled) {
      return;
    }

    const target = resolveInspectableTarget(event.target, inspectBadge, inspectToggle);

    if (target) {
      showBadge(target, window.innerWidth / 2, window.innerHeight - 110);
    }
  });

  document.addEventListener("focusout", () => {
    if (inspectorEnabled) {
      hideBadge();
    }
  });

  window.addEventListener("blur", hideBadge);
  inspectToggle.addEventListener("click", () => updateInspectorState(!inspectorEnabled));

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
})();
