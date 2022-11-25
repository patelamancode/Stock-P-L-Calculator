const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');

const investedAmount = parseInt(initialValue.value) * parseInt(stockCount.value);
const currentAmount = parseInt(currentValue.value) * parseInt(stockCount.value);



const profitAmount = function(){
    
}

const profitPercentage = function(){
    console.log("I am percent and called")
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
    console.log(investedAmount.value , currentAmount.value)
})

reload.addEventListener('click', function(){
    window.location.reload();
})