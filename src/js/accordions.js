// Get all accordion headers
const accordionHeaders = document.querySelectorAll(".os-accordion__header");

// Function to toggle accordion
function toggleAccordion(header) {
  const item = header.parentElement;
  const content = item.querySelector(".os-accordion__content");

  // Check if the item is already active
  if (item.classList.contains("active")) {
    item.classList.remove("active");
    content.style.maxHeight = null; // Collapse the content
  } else {
    // Close other active accordions (optional for single-expand behavior)
    const accordion = item.parentElement;
    accordion.querySelectorAll(".os-accordion__item.active").forEach((activeItem) => {
      activeItem.classList.remove("active");
      activeItem.querySelector(".os-accordion__content").style.maxHeight = null;
    });

    // Open the clicked accordion
    item.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px"; // Expand content
  }
}

// Add event listeners to accordion headers
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => toggleAccordion(header));
});
