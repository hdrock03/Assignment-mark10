const billingAmount = document.querySelector("#billing-amount");
const cash = document.querySelector("#cash");
const check = document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
check.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billingAmount.value > 0) {
      
      if (cash.value >= billingAmount.value) {
        
        const amountToBeReturned = cash.value - billingAmount.value; 
        calculateChange(amountToBeReturned);
      } else {
        showMessage("wash the plates");
      }
    } else {
      showMessage("Invalid Bill Amount");
    }
  });
  function calculateChange(amountToBeReturned) {
    
    for (let i = 0; i < availableNotes.length; i++) {
      
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

      amountToBeReturned = amountToBeReturned % availableNotes[i];
     
      noOfNotes[i].innerText = numberOfNotes;
    }
  }
  
  function hideMessage() {
    message.style.display = "none";
  }
  
  function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
  }