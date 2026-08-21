const triggers = document.querySelectorAll(".modal-trigger");
const overlays = document.querySelectorAll(".modal-overlay");
const closeButtons = document.querySelectorAll(".modal-close");
const nationCards = document.querySelectorAll(".nation-card");

const factionDetails = {
    "Vulterra": {
        government: "Not yet documented.",
        history: "Not yet documented.",
        allies: "Not yet documented."
    }
};

function openModal(name) {
    const overlay = document.getElementById("modal-" + name);
    if (overlay) {
        overlay.classList.add("active");
    }
}

function closeModal(overlay) {
    overlay.classList.remove("active");
}

function openFactionDetail(card) {
    const name = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;
    const details = factionDetails[name] || {
        government: "Not yet documented.",
        history: "Not yet documented.",
        allies: "Not yet documented."
    };

    document.getElementById("detail-name").textContent = name;
    document.getElementById("detail-description").textContent = description;
    document.getElementById("detail-government").textContent = details.government;
    document.getElementById("detail-history").textContent = details.history;
    document.getElementById("detail-allies").textContent = details.allies;

    openModal("faction-detail");
}

triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const name = trigger.getAttribute("data-modal");
        openModal(name);
    });
});

nationCards.forEach(function (card) {
    card.addEventListener("click", function () {
        openFactionDetail(card);
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
