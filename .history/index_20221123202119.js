const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('.initial-price-input');
const stockCount = document.querySelector('.stock-count');
const currentValue = document.querySelector('.current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');











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
    console.log(initialValue.value);
})

reload.addEventListener('click', function(){
    window.location.reload();
})