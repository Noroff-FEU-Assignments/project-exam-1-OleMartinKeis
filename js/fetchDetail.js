const detailContainer = document.querySelector(".recipe-detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://flowerpower-noroff.one/wp-json/wc/store/products/" + id;


async function fetchDetail() {

    try {
        const response = await fetch(url);
        const recipeDetails = await response.json();
       
        createHTML(recipeDetails);

        var modal = document.querySelector(".modal");
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modalImg = recipeDetails.images[0].src;
        captionText = recipeDetails.name;

        img.onclick = function(){
            modal.style.display = "block";
            
            captionText.innerHTML = this.alt;
        }

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

    }

    catch(error) {
        console.log(error)
        detailContainer.innerHTML = ("An error occured while calling the API");
    }

}

fetchDetail();

function createHTML(recipeDetails) {
    

    detailContainer.innerHTML = `<h1 class="detail-h1">${recipeDetails.name}</h1>
                                <div class="recipes-details">
                                    <img src="${recipeDetails.images[0].src}" class ="open-recipe-image" id="myImg"/>
                                    <div id="recipeModal" class="modal">
                                        <span class="close">&times;</span>
                                        <img class="modal-content" id="img01" src="${recipeDetails.images[0].src}">
                                        <div id="caption">${recipeDetails.name}</div>
                                    </div>
                                    <p>${recipeDetails.description}<p>
                                </div>`
};
