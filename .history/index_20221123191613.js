const checkButton = document.querySelector('#check-btn');
const initialValue = document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');


const profitAmount = function(){
    let x = "Aman";
}

const profitPercentage = function(){
    console.log("I am percent and called")
}

function showResult(profitAmount, profitPercentage){
    // validation needed
    // profitAmount();
    // profitPercentage();
    console.log(profitAmount, profitPercentage);
    resultDisplay.style.display = "flex";
    let result = resultDisplay.innerText =  `Hey, the ${x} is {amount} and the percent is {percentage%}`;
    return result;
}


checkButton.addEventListener('click', function(){
    showResult();
    reload.style.display = "flex";
})

reload.addEventListener('click', function(){
    window.location.reload();
})