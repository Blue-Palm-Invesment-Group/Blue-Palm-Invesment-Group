/* HEADER */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,.05)";

    }

});



/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



/* FAQ */

const details = document.querySelectorAll(".faq details");

details.forEach(item => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            details.forEach(other => {

                if (other !== item) {

                    other.removeAttribute("open");

                }

            });

        }

    });

});