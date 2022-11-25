const checkButton = document.querySelector('#check-btn');
const initialValue =document.querySelector('#initial-price-input');
const stockCount = document.querySelector('#stock-count');
const currentValue = document.querySelector('#current-price-input');
const resultDisplay = document.querySelector('#result-display');
const reload = document.querySelector('.refresh-btn');


const calculateProfitAndLoss = function(initial, count, final){
    if(initial > final){
        const loss = (final-initial) * count;
        const lossPercent = (loss / initial) * 100;
        console.log(`Hey the loss is ${loss} and the percent is ${lossPercent}`);
    } else if(initial < final){
        const profit = (final-initial) * count;
        const profitPercent = (profit / initial) * 100;
        console.log(`Hey the profit is ${profit} and the percent is ${profitPercent}`);
    } else {
        console.log(`Hey you have No Loss & No Profit`);
    }
}

calculateProfitAndLoss(10, 5, 100)











// const profitAmount = function(){
    
// }

// const profitPercentage = function(){
    
// }

// function showResult(){
//     // validation needed
//     profitAmount();
//     profitPercentage();
//     resultDisplay.style.display = "flex";
//     let result = resultDisplay.innerText =  `Hey, the {profit / loss} is {amount} and the percent is {percentage%}`;
//     return result;
// }


// checkButton.addEventListener('click', function(){
//     // showResult();
//     reload.style.display = "flex";
//     // console.log (typeof(parseInt(initialValue.value)));
//     // console.log(stockCount.value);
//     // console.log(currentValue.value);
//     console.log(inputAmount);
// })

// reload.addEventListener('click', function(){
//     window.location.reload();
// })