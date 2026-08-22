const aboutToggle = document.getElementById("aboutToggle");
const infoPage = document.getElementById("infoPage");

aboutToggle.addEventListener("click", () => {

    const open = infoPage.classList.toggle("open");

    aboutToggle.classList.toggle("open", open);

    aboutToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
    );

});
