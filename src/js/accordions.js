const accordionHeaders = document.querySelectorAll(".os-accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".os-accordion-content");

    if (item.classList.contains("active")) {
      // Collapse the accordion
      content.style.height = content.scrollHeight + "px";
      setTimeout(() => {
        content.style.height = "0";
      });
      item.classList.remove("active");
    } else {
      // Close other active accordions
      document.querySelectorAll(".os-accordion-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".os-accordion-content").style.height = "0";
        }
      });

      // Expand the clicked accordion
      item.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    }
  });
});
