const checkButton = document.querySelector('#check-btn');
const initialValue = parseInt(document.querySelector('.initial-price-input'));
const stockCount = parseInt(document.querySelector('.stock-count'));
const currentValue = document.querySelector('.current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');



const investedAmount = (initialValue.value) * stockCount.value;








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
    // console.log(typeof(initialValue.value));
    console.log(investedAmount);
    console.log(valueOf(initialValue));
})

reload.addEventListener('click', function(){
    window.location.reload();
})