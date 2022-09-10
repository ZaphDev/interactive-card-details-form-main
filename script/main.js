let cardName = document.getElementById('cardName');
let cardNumber = document.getElementById('cardNumber');
let cardMonth = document.getElementById('month');
let cardYear = document.getElementById('year');
let cardCvc = document.getElementById('CVC');
let cardForm = document.getElementById('cardForm');

function numberCheck(){  
       if(cardNumber.validity.valid & cardNumber.value.length == 16) {
            cardNumber.value=cardNumber.value.replace(/(.{4})/g,"$1 ");    
            document.getElementById('imgCardNumber').innerHTML= cardNumber.value;
            document.getElementById('cardNumberError').innerHTML = "";
            cardNumber.style.borderColor="";   
        }
  else if(cardNumber.validity.patternMismatch) {
        document.getElementById('imgCardNumber').innerHTML= cardNumber.value;
        document.getElementById('cardNumberError').innerHTML = "Wrong format, numbers only";      
        cardNumber.style.borderColor="red";
    }
    else if(cardNumber.validity.valueMissing) {
        document.getElementById('cardNumberError').innerHTML = "Can't be blank";      
        cardNumber.style.borderColor="red";
    }
    else if(cardNumber.value.length < 16) {
        document.getElementById('cardNumberError').innerHTML = "Card number must be 16 digits";      
        cardNumber.style.borderColor="red";
    }
}
document.getElementById('imgCardName').innerHTML= cardName.value;
document.getElementById('imgCardDate').innerHTML= cardMonth.value+"/"+cardYear.value;
document.getElementById('imgCardCvc').innerHTML= cardCvc.value;
