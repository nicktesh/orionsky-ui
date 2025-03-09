/**
 * OrionSky UI v0.1.0
 * A modern, open-source CSS/JavaScript library inspired by constellations and cosmic themes.
 * https://orionsky-ui.com
 *
 * Copyright (c) 2023 OrionSky UI Team
 * Licensed under MIT
 */

// Import the logo switcher utility
import LogoSwitcher from "./utilities/logo-switcher.js";
// Import the icons module
import Icons from "./modules/icons.js";

// OrionSky UI main module
const OrionSky = (function () {
  "use strict";

  // Private variables
  const VERSION = "0.1.0";

  // Theme handling
  const THEME_KEY = "orionsky-theme";
  const DEFAULT_THEME = "light";

  // Private methods
  const _setTheme = function (theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(THEME_KEY, "light");
    }
  };

  const _getTheme = function () {
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  };

  const _toggleTheme = function () {
    const currentTheme = _getTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    _setTheme(newTheme);
    return newTheme;
  };

  // Initialize theme and logo switching
  const _initTheme = function () {
    // Apply initial theme from localStorage
    const savedTheme = localStorage.getItem("os-theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    // Initialize logo switcher
    LogoSwitcher.initLogoSwitcher();

    // Replace any logo placeholders
    LogoSwitcher.replacePlaceholdersWithThemeAwareLogos();
  };

  // Initialize icons
  const _initIcons = function () {
    Icons.initIcons();
  };

  // Initialize components
  const _initThemeToggle = function () {
    const toggleButtons = document.querySelectorAll(".os-theme-toggle");

    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        _toggleTheme();
      });
    });

    // Set initial theme
    _setTheme(_getTheme());
  };

  const _initDropdowns = function () {
    const dropdownToggles = document.querySelectorAll(".os-dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = this.closest(".os-dropdown");
        const menu = dropdown.querySelector(".os-dropdown-menu");

        // Close all other dropdowns
        document.querySelectorAll(".os-dropdown-menu.show").forEach((openMenu) => {
          if (openMenu !== menu) {
            openMenu.classList.remove("show");
          }
        });

        // Toggle current dropdown
        menu.classList.toggle("show");
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".os-dropdown")) {
        document.querySelectorAll(".os-dropdown-menu.show").forEach((menu) => {
          menu.classList.remove("show");
        });
      }
    });
  };

  const _initCollapse = function () {
    const collapseToggles = document.querySelectorAll('[data-os-toggle="collapse"]');

    collapseToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSelector = this.getAttribute("data-os-target");
        const target = document.querySelector(targetSelector);

        if (target) {
          target.classList.toggle("show");

          // Update aria attributes
          const expanded = target.classList.contains("show");
          this.setAttribute("aria-expanded", expanded);
        }
      });
    });
  };

  const _initTabs = function () {
    const tabLinks = document.querySelectorAll(".os-nav-tabs .os-nav-link");

    tabLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const tabId = this.getAttribute("href") || this.getAttribute("data-os-target");
        const tabContent = document.querySelector(tabId);

        if (tabContent) {
          // Deactivate all tabs
          const tabContainer = this.closest(".os-nav-tabs");
          tabContainer.querySelectorAll(".os-nav-link").forEach((tab) => {
            tab.classList.remove("active");
          });

          // Hide all tab content
          const tabContentContainer = tabContent.parentNode;
          tabContentContainer.querySelectorAll(".os-tab-pane").forEach((pane) => {
            pane.classList.remove("active", "show");
          });

          // Activate current tab and content
          this.classList.add("active");
          tabContent.classList.add("active", "show");
        }
      });
    });
  };

  const _initAlerts = function () {
    const alertCloseButtons = document.querySelectorAll(".os-alert .os-close");

    alertCloseButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const alert = this.closest(".os-alert");

        if (alert) {
          alert.classList.add("os-fade-out");

          // Remove alert after animation
          setTimeout(() => {
            alert.remove();
          }, 300);
        }
      });
    });
  };

  const _initTooltips = function () {
    const tooltipTriggers = document.querySelectorAll("[data-os-tooltip]");

    tooltipTriggers.forEach((trigger) => {
      const tooltipText = trigger.getAttribute("data-os-tooltip");
      const tooltipPosition = trigger.getAttribute("data-os-tooltip-position") || "top";

      // Create tooltip element
      const tooltip = document.createElement("div");
      tooltip.className = `os-tooltip os-tooltip-${tooltipPosition}`;
      tooltip.textContent = tooltipText;

      // Add tooltip behavior
      trigger.addEventListener("mouseenter", function () {
        document.body.appendChild(tooltip);

        // Position tooltip
        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let top, left;

        switch (tooltipPosition) {
          case "top":
            top = triggerRect.top - tooltipRect.height - 10;
            left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            break;
          case "bottom":
            top = triggerRect.bottom + 10;
            left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            break;
          case "left":
            top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            left = triggerRect.left - tooltipRect.width - 10;
            break;
          case "right":
            top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            left = triggerRect.right + 10;
            break;
        }

        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left + window.scrollX}px`;
        tooltip.classList.add("show");
      });

      trigger.addEventListener("mouseleave", function () {
        tooltip.classList.remove("show");
        setTimeout(() => {
          if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
          }
        }, 300);
      });
    });
  };

  // Public API
  return {
    // Initialize all components
    init: function () {
      _initTheme();
      _initThemeToggle();
      _initIcons();
      _initDropdowns();
      _initCollapse();
      _initTabs();
      _initAlerts();
      _initTooltips();

      console.log(`OrionSky UI ${VERSION} initialized`);
    },

    // Theme methods
    getTheme: _getTheme,
    setTheme: _setTheme,
    toggleTheme: _toggleTheme,

    // Icon methods
    loadIconWeight: Icons.loadIconWeight,

    // Version
    version: VERSION,

    // Expose logo switcher for direct use
    logoSwitcher: LogoSwitcher,
  };
})();

// Export as default
export default OrionSky;
