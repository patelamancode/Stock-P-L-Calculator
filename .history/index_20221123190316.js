const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');


const profitAmount = function(){

}

const profitPercentage = function(){
    
}

function showResult(){
    resultDisplay.style.display = "flex";
    return `Hey, the {profit / loss} is {amount} and the percent is {percentage%}`
}


checkButton.addEventListener('click', function(){
    showResult();
    reload.style.display = "flex";
})

reload.addEventListener('click', function(){
    window.location.reload();
})