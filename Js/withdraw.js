
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
//    step-2:
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// last-Step:
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('Please provide anumber');
    return;
}

// step-3:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previuoseWithdrawTotalAmountString = withdrawTotalElement.innerText;
const previouseWithdrawTotalAmount = parseFloat(previuoseWithdrawTotalAmountString);
 

// step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previouseBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previouseBalanceTotalString);
if(newWithdrawAmount > previousBalanceTotal){
    alert('Sorry, you do not have enough Amount');
    return;
}

// step-4:
const currentWithdrawTotal = previouseWithdrawTotalAmount + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;
// step-6:
const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
balanceTotalElement.innerText = newBalanceTotal;



})