const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('.initial-price-input').value;
const stockCount = document.querySelector('.stock-count').value;
const currentValue = document.querySelector('.current-price-input').value;
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');




console.log(initialValue, stockCount, currentValue);
let investedAmount = initialValue.value * stockCount.value;
const currentAmount = parseInt(currentValue.value) * parseInt(stockCount.value);









const profitAmount = function(){
    
}

const profitPercentage = function(){
    
}

function showResult(){
    // validation needed
    profitAmount();
    profitPercentage();
    resultDisplay.style.display = "flex";
    let result = resultDisplay.innerText =  `Hey, the {profit / loss} is {amount} and the percent is {percentage%}`;
    return result;
}


checkButton.addEventListener('click', function(){
    showResult();
    reload.style.display = "flex";
    console.log(investedAmount);
})

reload.addEventListener('click', function(){
    window.location.reload();
})