const aboutToggle = document.getElementById("aboutToggle");
const infoPage = document.getElementById("infoPage");
const arrow = document.getElementById("arrow");

aboutToggle.addEventListener("click", () => {
    const isOpen = aboutToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        // CLOSE
        aboutToggle.setAttribute("aria-expanded", "false");
        infoPage.classList.remove("open");
        arrow.classList.remove("open");
    } else {
        // OPEN
        aboutToggle.setAttribute("aria-expanded", "true");
        infoPage.classList.add("open");
        arrow.classList.add("open");
    }
});
