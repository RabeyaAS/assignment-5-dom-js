console.log('donation file added');

document.getElementById('btn-donate-now').addEventListener('click', function(){
    console.log('inside the btn donate now function');

    const inputDonateAmount = document.getElementById('input-donation-amount').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
    

    if(inputDonateAmountNumber > 0){
        console.log('successful donation');

        const currentDonationAmount = document.getElementById('btn-current-donate-amount').innerText;
        const currentDonationNumber = parseFloat(currentDonationAmount);

        const donationAdded = currentDonationNumber + inputDonateAmountNumber;

        document.getElementById('btn-current-donate-amount').innerText = donationAdded;
        
        // taking away from balance
        const balance = document.getElementById('money-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance;
    }

    else if(isNaN(inputDonateAmountNumber)){
        alert('Invalid Amount! Please try again.');
        return;
    }

    else{
        alert('Donation Declined! Please try again.');
  
    }
  
})



