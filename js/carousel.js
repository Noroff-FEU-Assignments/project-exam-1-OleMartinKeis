const slidesContainer = document.querySelector(".slides-container");
const carouselURL = "https://flowerpower-noroff.one/wp-json/wc/store/products";

async function displayCarousel () {

    try {
        slidesContainer.innerHTML = "";
        const response = await fetch(carouselURL);
        const carouselItems = await response.json();
        
        
    
        carouselItems.forEach(function(product) {
            
            slidesContainer.innerHTML += 
            `<li class="slide"><a href="detail.html?id=${product.id}" class="recipes-carousel">
            <h2>${product.name}</h2>
            <img class="carousel-recipes-image" src="${product.images[0].src}">
            </div>`
        });

        buttonActivate();

        } catch (error) {
            console.log(error)
        } 
}


displayCarousel();

function buttonActivate(){
    const prevBtn = document.getElementById("slide-left");
    const nextBtn = document.getElementById("slide-right");
    const slide = document.querySelector(".slide");
    

    nextBtn.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });

    prevBtn.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
};



