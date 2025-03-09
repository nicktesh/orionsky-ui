/**
 * OrionSky UI Icons Module
 * Integration with Phosphor Icons using the web font approach
 */

// Track loaded weights to avoid duplicate loading
const loadedWeights = new Set();

/**
 * Load a Phosphor Icons weight stylesheet
 * @param {string} weight - Icon weight ('thin', 'light', 'regular', 'bold', 'fill', 'duotone')
 * @returns {Promise<boolean>} - Promise that resolves when the stylesheet is loaded
 */
async function loadWeight(weight = "regular") {
  // Skip if already loaded
  if (loadedWeights.has(weight)) {
    return true;
  }

  // Determine the class prefix based on weight
  const classPrefix = weight === "regular" ? "ph" : `ph-${weight}`;

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";

    // Use the correct URL format from Phosphor Icons documentation
    link.href = `https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`;

    link.onload = () => {
      loadedWeights.add(weight);
      resolve(true);
    };

    link.onerror = () => {
      console.error(`Failed to load Phosphor Icons ${weight} weight`);
      reject(false);
    };

    document.head.appendChild(link);
  });
}

/**
 * Initialize icons in the DOM
 * Looks for elements with data-os-icon attribute and replaces them with Phosphor Icons
 */
export async function initIcons() {
  const iconElements = document.querySelectorAll("[data-os-icon]");
  if (iconElements.length === 0) return;

  // Get unique weights needed
  const weights = new Set();
  iconElements.forEach((el) => {
    const weight = el.getAttribute("data-os-icon-weight") || "regular";
    weights.add(weight);
  });

  // Load all required weights
  try {
    await Promise.all([...weights].map((weight) => loadWeight(weight)));
  } catch (error) {
    console.error("Error loading Phosphor Icons weights:", error);
  }

  // Process each icon element
  iconElements.forEach((element) => {
    const name = element.getAttribute("data-os-icon");
    const weight = element.getAttribute("data-os-icon-weight") || "regular";
    const size = element.getAttribute("data-os-icon-size") || "md";

    // Clear existing content
    element.innerHTML = "";

    // Create the icon element
    const iconElement = document.createElement("i");

    // Add the appropriate classes
    if (weight === "regular") {
      iconElement.classList.add("ph");
    } else {
      iconElement.classList.add(`ph-${weight}`);
    }

    iconElement.classList.add(`ph-${name}`);

    // Add size class if specified
    if (size) {
      element.classList.add(`os-icon-${size}`);
    }

    // Add color class if specified
    const color = element.getAttribute("data-os-icon-color");
    if (color) {
      element.classList.add(`os-icon-${color}`);
    }

    // Add cosmic effect if specified
    if (element.hasAttribute("data-os-icon-cosmic")) {
      element.classList.add("os-icon-cosmic");
    }

    // Add animation if specified
    if (element.hasAttribute("data-os-icon-spin")) {
      element.classList.add("os-icon-spin");
    }

    if (element.hasAttribute("data-os-icon-pulse")) {
      element.classList.add("os-icon-pulse");
    }

    // Add counter if specified
    if (element.hasAttribute("data-os-icon-count")) {
      element.classList.add("os-icon-counter");
      element.setAttribute("data-count", element.getAttribute("data-os-icon-count"));
    }

    // Add badge if specified
    if (element.hasAttribute("data-os-icon-badge")) {
      element.classList.add("os-icon-badge");
    }

    // Add the icon element to the container
    element.appendChild(iconElement);
  });
}

/**
 * Load a specific icon weight if needed
 * @param {string} weight - Icon weight to load
 * @returns {Promise<boolean>} - Promise that resolves when the weight is loaded
 */
export async function loadIconWeight(weight = "regular") {
  return loadWeight(weight);
}

export default {
  initIcons,
  loadIconWeight,
};
