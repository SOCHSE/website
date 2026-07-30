(function () {
  const root = document.documentElement;
  const storageKey = "sochse-theme";
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  function preferredTheme() {
    const stored = storedTheme();
    return stored === "light" || stored === "dark"
      ? stored
      : media.matches
        ? "dark"
        : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelectorAll("[data-theme-label]").forEach((label) => {
      label.textContent = theme === "dark" ? "Use light theme" : "Use dark theme";
    });
  }

  applyTheme(preferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(preferredTheme());

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(storageKey, next);
        } catch {
          // Theme still applies for this page when storage is unavailable.
        }
        applyTheme(next);
      });
    });

    const menuButton = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");

    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!expanded));
        menu.toggleAttribute("data-open", !expanded);
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuButton.setAttribute("aria-expanded", "false");
          menu.removeAttribute("data-open");
        });
      });
    }
  });

  media.addEventListener("change", () => {
    if (!storedTheme()) {
      applyTheme(media.matches ? "dark" : "light");
    }
  });
})();
