"use strict";
// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
const callTotalOneElement = document.querySelector(".callTotalOne");
callTotalOneElement.textContent = '0.00';
const smsTotalOneElement = document.querySelector(".smsTotalOne");
smsTotalOneElement.textContent = '0.00';
const totalOneElement = document.querySelector(".totalOne");
totalOneElement.textContent = '0.00'
//get a reference to the add button
const addToBillBtnElement = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
let callsTotal = 0;
let smsTotal = 0;

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal() {
  let billTypeEntered = billTypeTextElement.value.toLowerCase().trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }
  callTotalOneElement.innerHTML = callsTotal.toFixed(2);
  smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
  let totalCost = callsTotal + smsTotal;
  totalOneElement.innerHTML = totalCost.toFixed(2);

  //totalOneElement.classList.remove('warning');
  //totalOneElement.classList.remove('danger');

  if(totalCost>=30 && totalCost<50){
      totalOneElement.classList.add('warning');
  } else if(totalCost>=50){
      totalOneElement.classList.add('danger');
  }
}
addToBillBtnElement.addEventListener("click", textBillTotal);
