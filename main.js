const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {
    sections.forEach((current) => {
        const sectionTop = current.offsetTop - 150;
        const sectionHeight = current.offsetHeight;

        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("pullUp");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("pullUp");
        }
    });
});

