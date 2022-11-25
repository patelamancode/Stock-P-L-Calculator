const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');





function showResult(){
    resultDisplay.style.display = "block";

}


checkButton.addEventListener('click', function(){
    showResult
})