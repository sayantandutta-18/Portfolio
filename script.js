const themebtn = document.getElementById('theme-btn');

themebtn.addEventListener('click', () => {
    
document.body.classList.toggle('light-theme');

if(document.body.classList.contains('light-theme')) {

themeBtn.classList.remove("fa-moon");
themeBtn.classList.add("fa-sun");

}

else{

    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");

}

});


//sticky navbar

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 0){
    
    header.style.background = "#111827";


     header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.3)";

}
else{
    
header.style.background = "transparent";

        header.style.boxShadow = "none";

    }

})

//smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// ACTIVE NAVBAR
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==============================
// SCROLL REVEAL
// ==============================

const revealItems = document.querySelectorAll(

".about,.skills,.projects,.contact"

);

window.addEventListener("scroll",()=>{

    revealItems.forEach((item)=>{

        const revealPoint = 120;

        const windowHeight = window.innerHeight;

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < windowHeight - revealPoint){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

});
// ==============================
// TYPING EFFECT
// ==============================

const typingText = document.getElementById("typing-text");

const words = [

    "Frontend Developer",

    "Web Developer",

    "React Learner",

    "Full Stack Developer"

];

let wordIndex = 0;

function changeWord(){

    typingText.textContent = words[wordIndex];

    wordIndex++;

    if(wordIndex >= words.length){

        wordIndex = 0;

    }

}

setInterval(changeWord,2000);
// ==============================
// CONTACT FORM
// ==============================

const form = document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});
// ==============================
// SAVE THEME
// ==============================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-theme");

    themeBtn.classList.remove("fa-moon");

    themeBtn.classList.add("fa-sun");

}

themeBtn.addEventListener("click",()=>{

    if(document.body.classList.contains("light-theme")){

        localStorage.setItem("theme","light");

    }

    else{

        localStorage.setItem("theme","dark");

    }

});


