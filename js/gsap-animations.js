window.addEventListener("load", () => {
    gsap.from(".hero", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });
    gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });
    gsap.from(".hero-sub", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
    });
    gsap.from(".hero-desc", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out"
    });
    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.9,
        ease: "back.out(1.7)"
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });
});
window.addEventListener("load", () => {
    gsap.from("body", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
    });
});
new Typed("#typed", {
    strings: [
        "build fast, responsive, futuristic web experiences."
    ],
    typeSpeed: 35,
    backSpeed: 0,
    loop: true,
    showCursor: true
});
