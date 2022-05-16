'use strict';

//get a reference to the calculate button
const calculateBtnElement = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
const billTotalElement = document.querySelector('.billTotal');

//get a reference to the billString
const billStringElement = document.querySelector('.billString');


function calculateBtnClicked(){

    let billString =  billStringElement.value;

    let billItems = billString.split(",");
    let billTotal = 0;
    for(let i=0;i<billItems.length;i++) {
        let billItem = billItems[i].trim().toLowerCase();
        if (billItem==='sms') {
            billTotal+= 0.75;
        }
        else if (billItem==='call'){
            billTotal += 2.75;
        } else billTotal+=0;
    }
    let roundedBillTotal = billTotal.toFixed(2);

    billTotalElement.innerHTML= roundedBillTotal;

    billTotalElement.classList.remove('warning');
    billTotalElement.classList.remove('danger');

    if(roundedBillTotal>=20 && roundedBillTotal<30){
        billTotalElement.classList.add('warning');
    }else if(roundedBillTotal>=30){
        billTotalElement.classList.add('danger');
    } 

}

calculateBtnElement.addEventListener('click', calculateBtnClicked);


