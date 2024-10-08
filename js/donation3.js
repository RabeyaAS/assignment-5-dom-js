console.log('donation 3 file added');

document.getElementById('btn-donate-now3').addEventListener('click', function(){
    console.log('inside the btn donate now function');

    const inputDonateAmount = document.getElementById('input-donation-amount3').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
    

    if(inputDonateAmountNumber > 0){
        console.log('successful donation');

        const currentDonationAmount = document.getElementById('btn-current-donate-amount3').innerText;
        const currentDonationNumber = parseFloat(currentDonationAmount);

        const donationAdded = currentDonationNumber + inputDonateAmountNumber;

        document.getElementById('btn-current-donate-amount3').innerText = donationAdded;
        
        // taking away from balance
        const balance = document.getElementById('money-balance').innerText;
        const balanceNumber = parseFloat(balance);

        if(inputDonateAmountNumber > balanceNumber){
            alert('You have insufficient balance. Please enter a different amount');
            return;
        }

        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance;


        // transaction history 

    }

    else if(isNaN(inputDonateAmountNumber)){
        alert('Invalid Amount! Please try again.');
        return;
    }

    else{
        alert('Donation Declined! Please try again.');
  
    }
  
})