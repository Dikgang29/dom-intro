// get a reference to the sms or call radio buttons
const billItemTypeRadioElem = document.querySelector('.billItemTypeRadio');
const radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');
const callTotalTwoElement = document.querySelector('.callTotalTwo');
callTotalTwoElement.textContent = '0.00';
const smsTotalTwoElement = document.querySelector('.smsTotalTwo');
smsTotalTwoElement.textContent = '0.00';
const totalTwoElement = document.querySelector('.totalTwo');
totalTwoElement.textContent = '0.00';
//get a reference to the add button

//create a variable that will keep track of the total bill
let callsTotalRadio = 0;
let smsTotalRadio = 0;


function radioBillTotal (){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value

    // billItemType will be 'call' or 'sms'
    if(billItemType==='call'){
        callsTotalRadio+=2.75;
    }else if(billItemType==='sms'){
        smsTotalRadio+=0.75;
    }
    callTotalTwoElement.innerHTML = callsTotalRadio.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalRadio.toFixed(2);
    let totalCostRadio  = smsTotalRadio+callsTotalRadio;
    totalTwoElement.innerHTML = totalCostRadio.toFixed(2);

    if(totalCostRadio>=30 && totalCostRadio<50){
        totalTwoElement.classList.add('warning');
    }else if (totalCostRadio>=50){
        totalTwoElement.classList.add('danger');
    }
}




}
radioBillAddBtnElement.addEventListener('click',radioBillTotal);

