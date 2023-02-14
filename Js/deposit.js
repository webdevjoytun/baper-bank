// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
//    step-2:
const depositField = document.getElementById('dposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

// step-3:
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-4:
const currentDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentDepositTotal;

// step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previouseBalanceTotal = parseFloat(previousBalanceTotalString);
//  step-6:
const currentBalanceTotal = previouseBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;




// last step:
depositField.value = '';

})