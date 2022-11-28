const cardContainer = document.querySelector(".recipe-container");
const loadMoreButton = document.getElementById("load-more");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");

const cardLimit = 11;
cardTotalElem = cardLimit;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;


const createCard = (index)

const addCarts = (pageIndex) => {
    currentPage = pageIndex;

    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange = pageIndex * cardIncrease;

    for (let i = startRange + 1; i <= endRange; i++) {
        createCard(i);
    }
};