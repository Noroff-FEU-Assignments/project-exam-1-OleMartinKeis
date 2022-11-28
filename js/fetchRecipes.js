const baseURL = "https://flowerpower-noroff.one/wp-json/wc/store/products";
const recipeContainer = document.querySelector(".recipe-container");
const loaderContainer = document.querySelector(".loader");

async function getRecipes(url){

    try {
        const loadMoreButton = document.getElementById("load-more");
       

        const response = await fetch(url);

        const recipes = await response.json();

        console.log(recipes);

        recipeContainer.innerHTML = "";

        recipes.forEach(product => {
           recipeContainer.innerHTML += `<a href="detail.html?id=${product.id}" class="recipes"><h2>${product.name}</h2><img class="recipes-image" src="${product.images[0].src}" style="max-width: 250px;"></a></div>` 
        }); 
    }
        
    catch(error) {
        console.log(error);
        recipeContainer.innerHTML = ("An error occured while calling the API");
    }
};

getRecipes(baseURL);




