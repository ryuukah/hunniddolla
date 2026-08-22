const aboutToggle = document.getElementById("aboutToggle");
const infoPage = document.getElementById("infoPage");

aboutToggle.addEventListener("click", () => {

    const isOpen = infoPage.classList.contains("open");

    if (isOpen) {

        // CLOSE
        infoPage.classList.remove("open");
        aboutToggle.classList.remove("open");

        aboutToggle.setAttribute("aria-expanded", "false");

    } else {

        // OPEN
        infoPage.classList.add("open");
        aboutToggle.classList.add("open");

        aboutToggle.setAttribute("aria-expanded", "true");

    }

});
