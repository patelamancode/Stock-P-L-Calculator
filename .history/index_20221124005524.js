const checkButton = document.querySelector('#check-btn');
const initialValue =(document.querySelector('.initial-price-input');
const stockCount = parseInt(document.querySelector('.stock-count').value);
const currentValue = parseInt(document.querySelector('.current-price-input').value);
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');

console.log(document.querySelector('.initial-price-input'))
console.log( parseInt(document.querySelector('.initial-price-input').value))
console.log(initialValue);




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
})

reload.addEventListener('click', function(){
    window.location.reload();
})