// Get all modal triggers
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const modalCloses = document.querySelectorAll("[data-modal-close]");

// Function to open a modal
function openModal(modalId) {
  const modal = document.querySelector(modalId);
  if (modal && modal instanceof HTMLDialogElement) {
    modal.showModal();
  }
}

// Function to close a modal
function closeModal(modal) {
  if (modal && modal instanceof HTMLDialogElement) {
    modal.close();
  }
}

// Add event listeners to open modals
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const target = trigger.getAttribute("data-modal-target");
    if (target) {
      openModal(target);
    }
  });
});

// Add event listeners to close modals
modalCloses.forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    const modal = closeButton.closest("dialog");
    closeModal(modal);
  });
});
