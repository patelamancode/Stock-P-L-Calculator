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
        // console.log(`Hey the loss is ${loss} and the percent is ${lossPercent}%`);
        showOutputMessage(`Hey the loss is ${loss} and the percent is ${lossPercent}%`)
    } else if(initial < final){
        const profit = (final-initial) * count;
        const profitPercent = (profit / initial) * 100;
        console.log(`Hey the profit is ${profit} and the percent is ${profitPercent}%`);
    } else {
        console.log(`Hey you have No Loss & No Profit`);
    }
}

// console.log(typeof(initialValue.value));

const submitHandler = function(){
    let ip = Number(initialValue.value);
    let qny = stockCount.value;
    let cp =  currentValue.value;
    console.log(typeof(ip));
    calculateProfitAndLoss(ip, qny, cp);
}

checkButton.addEventListener('click', function(){
    submitHandler();
    reload.style.display = "flex";
})

function showOutputMessage(msg){
    resultDisplay.innerText = msg;
}



reload.addEventListener('click', function(){
    window.location.reload();
})