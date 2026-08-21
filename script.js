const triggers = document.querySelectorAll(".modal-trigger");
const overlays = document.querySelectorAll(".modal-overlay");
const closeButtons = document.querySelectorAll(".modal-close");

function openModal(name) {
    const overlay = document.getElementById("modal-" + name);
    if (overlay) {
        overlay.classList.add("active");
    }
}

function closeModal(overlay) {
    overlay.classList.remove("active");
}

triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const name = trigger.getAttribute("data-modal");
        openModal(name);
    });
});

closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const overlay = button.closest(".modal-overlay");
        closeModal(overlay);
    });
});

overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            closeModal(overlay);
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        overlays.forEach(function (overlay) {
            closeModal(overlay);
        });
    }
});
