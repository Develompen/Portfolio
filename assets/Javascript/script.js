document.addEventListener("DOMContentLoaded", () => {
    const okey = document.querySelector(".okey");
    const headerHeader = document.querySelector(".header");
    const navList = document.querySelector(".nav__list");
    const homeSection = document.querySelector(".home");
    const homeTitle = document.querySelector(".home__title");
    const homeText = document.querySelector(".home__text");


    okey.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeOut") {
          
            okey.style.display = "none";

            setTimeout(() => {
                homeTitle.classList.add("active");
                homeText.classList.add("active");
                navList.classList.add("active");
            }, 1000); 
        }
    });
});