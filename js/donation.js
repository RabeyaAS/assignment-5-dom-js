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

        if(inputDonateAmountNumber > balanceNumber){
            alert('You have insufficient balance. Please enter a different amount');
            return;
        }

        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance.toFixed(2);


        // transaction history 
        const place = document.getElementById('donation-place').innerText;
        const newDiv = document.createElement('div');
        
        newDiv.innerHTML = `
        <div class="space-y-3 px-7 py-3 border-2 border-gray-400 rounded-2xl shadow-md lg:h-24 mb-6">
        <h2 class="font-bold text-xl">${inputDonateAmountNumber} Taka Donated for ${place}</h2>
        <p>Date: ${new Date().toString()}</p>
        </div>
        `;
        console.log(newDiv);

        document.getElementById('history-transaction').appendChild(newDiv);

    }

    else if(isNaN(inputDonateAmountNumber)){
        alert('Invalid Amount! Please try again.');
        return;
    }

    else{
        alert('Donation Declined! Please try again.');
  
    }
  
})



