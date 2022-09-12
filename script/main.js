let cardName = document.getElementById('cardName');
let cardNumber = document.getElementById('cardNumber');
let cardMonth = document.getElementById('month');
let cardYear = document.getElementById('year');
let cardCvc = document.getElementById('CVC');
let cardForm = document.getElementById('cardForm');

function nameCheck(){   
    if(cardName.validity.valid) {
         document.getElementById('imgCardName').innerHTML= cardName.value;
         document.getElementById('cardNameError').innerHTML = "";
         cardName.style.borderColor="";   
     }
   else if(cardName.validity.valueMissing) {
     document.getElementById('cardNameError').innerHTML = "Can't be blank";      
     cardName.style.borderColor = "#ff5252";
    }
 
}
function numberCheck(imgCardNumber){ 
    imgCardNumber=cardNumber.value 
       if(cardNumber.validity.valid & cardNumber.value.length == 16) {
            imgCardNumber=imgCardNumber.replace(/(.{4})/g,"$1 ");    
            document.getElementById('imgCardNumber').innerHTML= imgCardNumber;
            document.getElementById('cardNumberError').innerHTML = "";
            cardNumber.style.borderColor="";   
        }
  else if(cardNumber.validity.patternMismatch & cardNumber.value.length == 16) {
        imgCardNumber=imgCardNumber.replace(/(.{4})/g,"$1 ");    
        document.getElementById('imgCardNumber').innerHTML= imgCardNumber;
        document.getElementById('cardNumberError').innerHTML = "Wrong format, numbers only";      
        cardNumber.style.borderColor = "#ff5252";
    }
    else if(cardNumber.validity.valueMissing) {
        document.getElementById('cardNumberError').innerHTML = "Can't be blank";      
        cardNumber.style.borderColor = "#ff5252";
    }
    else if(cardNumber.value.length < 16) {
        document.getElementById('cardNumberError').innerHTML = "Card number must be 16 digits";      
        cardNumber.style.borderColor = "#ff5252";
    }
}
function dateCheck(){   
    if(cardMonth.validity.valid & cardYear.validity.valid) {        
        document.getElementById('imgCardDate').innerHTML= cardMonth.value+"/"+cardYear.value;
        document.getElementById('cardDateError').innerHTML = "";
        cardMonth.style.borderColor="";
        cardYear.style.borderColor="";
    }
    else if(cardMonth.validity.valid & cardYear.validity.valueMissing) {
        document.getElementById('cardDateError').innerHTML = "Can't blank";
        cardMonth.style.borderColor="";
        cardYear.style.borderColor="#ff5252";
    }
    else if(cardMonth.validity.valid & cardYear.validity.patternMismatch) {
        document.getElementById('cardDateError').innerHTML = "Invalid format";
        cardMonth.style.borderColor="";
        cardYear.style.borderColor="#ff5252";
    }
    else if(cardMonth.validity.valueMissing & cardYear.validity.valid) {
        document.getElementById('cardDateError').innerHTML = "Can't blank";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="";
    }
    else if(cardMonth.validity.patternMismatch & cardYear.validity.valid) {
        document.getElementById('cardDateError').innerHTML = "Invalid format";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="";
        
    }
    else if(cardMonth.validity.valueMissing & cardYear.validity.valueMissing) {
        document.getElementById('cardDateError').innerHTML = "Can't blank";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="#ff5252";
    }
    else if(cardMonth.validity.patternMismatch & cardYear.validity.patternMismatch) {
        document.getElementById('cardDateError').innerHTML = "Invalid format";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="#ff5252";
    } 
    else if(cardMonth.validity.patternMismatch & cardYear.validity.valueMissing) {
        document.getElementById('cardDateError').innerHTML = "Invalid format";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="#ff5252";
    }
    else if(cardMonth.validity.valueMissing & cardYear.validity.patternMismatch) {
        document.getElementById('cardDateError').innerHTML = "Invalid format";
        cardMonth.style.borderColor="#ff5252";
        cardYear.style.borderColor="#ff5252";
    }  
} 
function cvcCheck(){   
    if(cardCvc.validity.valid) {
        document.getElementById('imgCardCvc').innerHTML= cardCvc.value;
        document.getElementById('cardCvcError').innerHTML = "";
        cardCvc.style.borderColor="";   
     }
    else if(cardCvc.validity.valueMissing) {
        document.getElementById('cardCvcError').innerHTML = "Can't be blank";      
        cardCvc.style.borderColor = "#ff5252";
    }
    else if(cardCvc.validity.patternMismatch) {
        document.getElementById('cardCvcError').innerHTML = "Invalid Format";      
        cardCvc.style.borderColor = "#ff5252";
    }
 
}
function confirmData(){
    if(cardName.validity.valid & cardNumber.validity.valid & cardMonth.validity.valid & cardYear.validity.valid & cardCvc.validity.valid){
        document.getElementById('cardForm').style.display="none";
        document.getElementById('thankyou').style.display="block";
    }
    else{
        nameCheck();
        numberCheck();
        dateCheck();
        cvcCheck();
        document.getElementById('confirm').style.animation="shake 0.15s";
        setTimeout(() => {document.getElementById('confirm').style.animation='0s'; }, 150);
    }
}          
       




