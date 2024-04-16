document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#about") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
