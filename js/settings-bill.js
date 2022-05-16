'use strict';
// get a reference to the sms or call radio buttons


const billItemTypeWithSettingsElement = document.querySelector('.billItemTypeWithSettings');


// get refences to all the settings fields
const callCostSettingElement = document.querySelector('.callCostSetting');
const smsCostSettingElement = document.querySelector('.smsCostSetting');


const warningLevelSettingElement = document.querySelector('.warningLevelSetting');
const criticalLevelSettingElement = document.querySelector('.criticalLevelSetting');


//get a reference to the add button
const addButtonElement = document.querySelector('.addButton');

//get a reference to the 'Update settings' button
const updateSettingsElement = document.querySelector('.updateSettings');

// create a variables that will keep track of all three totals.
const callTotalSettingsElement = document.querySelector('.callTotalSettings');
callTotalSettingsElement.textContent = '0.00';
const smsTotalSettingsElement = document.querySelector('.smsTotalSettings');
smsTotalSettingsElement.textContent = '0.00';
const totalSettingsElement = document.querySelector('.totalSettings');
totalSettingsElement.textContent = '0.00';

var callSettingTotal = 0;
var smsSettingTotal = 0;
var criticalLevel = 0;
var warningLevel = 0;

//totals
var totalCall = 0
var totalSms = 0;


//add an event listener for when the 'Update settings' button is pressed
function updateSettingsBtn() {
    
    callSettingTotal = Number(callCostSettingElement.value);
    smsSettingTotal = Number(smsCostSettingElement.value);
    criticalLevel = Number(criticalLevelSettingElement.value);
    warningLevel = Number(warningLevelSettingElement.value);

    //levelSetting(totalSettingCost);

}

updateSettingsElement.addEventListener('click',updateSettingsBtn);

function levelSetting (totalSettingCost){

     totalSettingsElement.classList.remove('warning');
     totalSettingsElement.classList.remove('danger');

        if(totalSettingCost>= warningLevel && totalSettingCost < criticalLevel) {
            totalSettingsElement.classList.add('warning');
        } else if (totalSettingCost === criticalLevel){
            totalSettingsElement.classList.add('danger');
        }
}

//add an event listener for when the add button is pressed

function settingsAddBtn (){

    var radioButnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(radioButnSettings){
        let billItemTypeWithSettings = radioButnSettings.value;
        console.log(billItemTypeWithSettings);
        var totalSettingCost = (totalCall + totalSms);


       if(totalSettingCost < criticalLevel) {
            if (billItemTypeWithSettings==='call'){
            
                totalCall+=callSettingTotal;
   
                console.log(totalCall);
                console.log(totalSettingCost);
           }
           else if(billItemTypeWithSettings==='sms'){
               totalSms+=smsSettingTotal;
               console.log(totalSms);
            }
            callTotalSettingsElement.innerHTML = totalCall.toFixed(2);
            smsTotalSettingsElement.innerHTML = totalSms.toFixed(2);
            var totalSettingCost = (totalCall + totalSms);

            totalSettingsElement.innerHTML = totalSettingCost.toFixed(2);

        

   
        //    var totalSettingCost = totalCall + totalSms;
           levelSetting(totalSettingCost);
       }

    }

}
addButtonElement.addEventListener('click',settingsAddBtn);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
