// console.log('donation file added');

document.getElementById('btn-donate-now').addEventListener('click', function(){

    const inputDonateAmount = document.getElementById('input-donation-amount').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
  
    if(inputDonateAmountNumber >= 0){
        console.log('successful donation');

        const currentDonationAmount = document.getElementById('btn-current-donate-amount').innerText;
        const currentDonationNumber = parseFloat(currentDonationAmount);

        const balance = document.getElementById('money-balance').innerText;
        const balanceNumber = parseFloat(balance).toFixed(2);

        if(inputDonateAmountNumber > balanceNumber){
            alert('You have insufficient balance. Please enter a different amount');
            return;
        }

        // adding the donation amount
        const donationAdded = currentDonationNumber + inputDonateAmountNumber;

        document.getElementById('btn-current-donate-amount').innerText = donationAdded.toFixed(2);
        
        
        // taking away from balance
        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance.toFixed(2);

        alert('Congrats! Successful Donation!');

        const showModal = document.getElementById('my_modal_1');
        showModal.showModal();
        
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



