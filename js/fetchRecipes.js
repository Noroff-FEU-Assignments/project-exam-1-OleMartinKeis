var baseURL = "https://flowerpower-noroff.one/wp-json/wc/store/products?per_page=10";
const recipeContainer = document.querySelector(".recipe-container");
const loaderContainer = document.querySelector(".loader");
const cardCount = document.querySelector("#card-count")
const countCard = document.querySelector(".count-card")
const cardTotal = document.querySelector("#card-total")

cardTotal.innerHTML="12";

async function getRecipes(url){

    try {
        const loadMoreButton = document.getElementById("load-more");
       
        const response = await fetch(url);

        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        cardCount.innerHTML="10";

        recipes.forEach(product => {
           recipeContainer.innerHTML += `<a href="detail.html?id=${product.id}" class="recipes" >
                                            <h2>${product.name}</h2><img class="recipes-image" src="${product.images[0].src}" style="max-width: 250px;">
                                        </a><div class="card-space"></div>` 
            

            loadMoreButton.onclick = function() {
           
            let newURL ="https://flowerpower-noroff.one/wp-json/wc/store/products?per_page=15";
            cardCount.style.display ="none";
            countCard.innerHTML="12";
            loadMoreButton.style.display ="none";
            baseURL = newURL;
            getRecipes(newURL);
        }                                 
        });
        

    }
        
    catch(error) {
        console.log(error);
        recipeContainer.innerHTML = ("An error occured while calling the API");
    }
};

getRecipes(baseURL);


