/**
 * OrionSky UI Logo Switcher
 * A utility for automatically switching between light and dark logo versions based on theme.
 */

/**
 * Initialize logo switching functionality
 * @param {Object} options - Configuration options
 * @param {string} options.lightLogoSelector - CSS selector for light theme logos
 * @param {string} options.darkLogoSelector - CSS selector for dark theme logos
 * @param {string} options.themeAttribute - HTML attribute used for theme (default: 'data-theme')
 * @param {string} options.lightThemeValue - Value for light theme (default: 'light')
 * @param {string} options.darkThemeValue - Value for dark theme (default: 'dark')
 * @param {string} options.storageKey - LocalStorage key for theme (default: 'os-theme')
 */
export function initLogoSwitcher(options = {}) {
  const config = {
    lightLogoSelector: ".logo-light",
    darkLogoSelector: ".logo-dark",
    themeAttribute: "data-theme",
    lightThemeValue: "light",
    darkThemeValue: "dark",
    storageKey: "os-theme",
    ...options,
  };

  // Apply initial theme from localStorage
  const savedTheme = localStorage.getItem(config.storageKey);
  if (savedTheme) {
    document.documentElement.setAttribute(config.themeAttribute, savedTheme);
  }

  // Add CSS for logo switching if not already present
  if (!document.getElementById("os-logo-switcher-styles")) {
    const styleEl = document.createElement("style");
    styleEl.id = "os-logo-switcher-styles";
    styleEl.textContent = `
      [${config.themeAttribute}="${config.darkThemeValue}"] ${config.lightLogoSelector} {
        display: none !important;
      }
      [${config.themeAttribute}="${config.lightThemeValue}"] ${config.darkLogoSelector} {
        display: none !important;
      }
      :not([${config.themeAttribute}]) ${config.darkLogoSelector} {
        display: none !important;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Find all theme toggle buttons
  const themeToggles = document.querySelectorAll(".os-theme-toggle");
  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute(config.themeAttribute) || config.lightThemeValue;
      const newTheme = currentTheme === config.lightThemeValue ? config.darkThemeValue : config.lightThemeValue;
      document.documentElement.setAttribute(config.themeAttribute, newTheme);
      localStorage.setItem(config.storageKey, newTheme);
    });
  });
}

/**
 * Create a theme-aware logo element
 * @param {Object} options - Configuration options
 * @param {string} options.lightSrc - Source URL for light theme logo
 * @param {string} options.darkSrc - Source URL for dark theme logo
 * @param {string} options.alt - Alt text for the logo
 * @param {string} options.className - Additional CSS classes to add
 * @returns {HTMLElement} - Container element with both logo versions
 */
export function createThemeAwareLogo(options = {}) {
  const { lightSrc, darkSrc, alt = "Logo", className = "" } = options;

  if (!lightSrc || !darkSrc) {
    console.error("Both lightSrc and darkSrc are required for createThemeAwareLogo");
    return null;
  }

  const container = document.createElement("div");
  container.className = `os-theme-aware-logo ${className}`;
  container.style.display = "inline-block";
  container.style.position = "relative";

  const lightLogo = document.createElement("img");
  lightLogo.src = lightSrc;
  lightLogo.alt = alt;
  lightLogo.className = "logo-light";

  const darkLogo = document.createElement("img");
  darkLogo.src = darkSrc;
  darkLogo.alt = alt;
  darkLogo.className = "logo-dark";

  container.appendChild(lightLogo);
  container.appendChild(darkLogo);

  return container;
}

/**
 * Replace all logo placeholders with theme-aware logos
 * @param {Object} options - Configuration options
 * @param {string} options.selector - CSS selector for logo placeholders
 * @param {string} options.lightSrcAttribute - Data attribute for light logo source (default: 'data-light-src')
 * @param {string} options.darkSrcAttribute - Data attribute for dark logo source (default: 'data-dark-src')
 */
export function replacePlaceholdersWithThemeAwareLogos(options = {}) {
  const config = {
    selector: ".os-logo-placeholder",
    lightSrcAttribute: "data-light-src",
    darkSrcAttribute: "data-dark-src",
    ...options,
  };

  const placeholders = document.querySelectorAll(config.selector);
  placeholders.forEach((placeholder) => {
    const lightSrc = placeholder.getAttribute(config.lightSrcAttribute);
    const darkSrc = placeholder.getAttribute(config.darkSrcAttribute);
    const alt = placeholder.getAttribute("alt") || "Logo";
    const className = placeholder.className.replace("os-logo-placeholder", "").trim();

    if (lightSrc && darkSrc) {
      const themeAwareLogo = createThemeAwareLogo({
        lightSrc,
        darkSrc,
        alt,
        className,
      });

      if (themeAwareLogo) {
        placeholder.parentNode.replaceChild(themeAwareLogo, placeholder);
      }
    }
  });
}

// Export default object with all functions
export default {
  initLogoSwitcher,
  createThemeAwareLogo,
  replacePlaceholdersWithThemeAwareLogos,
};
