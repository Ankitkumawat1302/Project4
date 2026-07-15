
// Blog Search Function


function searchPosts() {

    const searchInput = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const blogCards =
        document.querySelectorAll(".blog-card");

    blogCards.forEach(card => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if(title.includes(searchInput)){

            card.style.display = "";

        }

        else{

            card.style.display = "none";

        }

    });

}



// Smooth Scroll for Navigation


document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute("href");

        if(targetId.startsWith("#")){

            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// Navbar Shadow on Scroll


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.2)";

    }

    else{

        header.style.boxShadow = "none";

    }

});



// Highlight Active Navigation Link


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});



// Welcome Message


window.addEventListener("load", () => {

    console.log("Welcome to TechSphere Blog!");

});


// Floating Note

window.addEventListener("load", () => {

    const toast = document.getElementById("noteToast");
    const close = document.getElementById("closeToast");

    if(!toast) return;

    close.addEventListener("click", () => {

        toast.style.animation = "slideOut .5s forwards";

        setTimeout(() => {

            toast.style.display = "none";

        },500);

    });

    setTimeout(() => {

        toast.style.animation = "slideOut .5s forwards";

        setTimeout(() => {

            toast.style.display = "none";

        },500);

    },7000);

});