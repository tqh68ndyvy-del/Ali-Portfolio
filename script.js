/*==========================
        TYPING EFFECT
==========================*/

const words = [
    "Full Stack Developer",
    "PHP Developer",
    "Frontend Developer",
    "Backend Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const text = document.querySelector(".home-text h3");

function typing() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        text.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typing, 1500);

            return;

        }

    } else {

        text.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex == 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex == words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typing, isDeleting ? 60 : 120);

}

typing();



/*==========================
     SCROLL ANIMATION
==========================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(sec => {

        const top = window.scrollY;

        const offset = sec.offsetTop - 250;

        if (top >= offset) {

            sec.classList.add("show");

        }

    });

});



/*==========================
     HEADER SHADOW
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        header.style.boxShadow = "none";

    }

});



/*==========================
     ACTIVE LINK
==========================*/

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});
const cvBtn = document.getElementById("cvBtn");
const cvModal = document.getElementById("cvModal");
const closeCV = document.getElementById("closeCV");

cvBtn.addEventListener("click", function(e){
    e.preventDefault();
    cvModal.style.display = "flex";
});

closeCV.addEventListener("click", function(){
    cvModal.style.display = "none";
});

cvModal.addEventListener("click", function(e){
    if(e.target === cvModal){
        cvModal.style.display = "none";
    }
});