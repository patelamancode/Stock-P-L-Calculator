const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');




function showResult(){
    resultDisplay.style.display = "flex";

}


checkButton.addEventListener('click', function(){
    showResult();
    reload.style.display = "flex";
})

reload.addEventListener('click', function(){
    window.location.reload();
})