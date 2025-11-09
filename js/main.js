const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuIcon.classList.toggle("active");
});
const transitionEl = document.querySelector(".page-transition");
window.onload = () => {
    transitionEl.classList.remove("active"); 
};
document.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("target") === "_blank") return;
    link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.href;
        transitionEl.classList.add("active");
        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});