
// Donation Card - 1
document.getElementById('btn-donate-now').addEventListener('click', function(){

    const inputDonateAmount = document.getElementById('input-donation-amount').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
  
    if(inputDonateAmountNumber >= 0){

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
        <div class="space-y-3 px-7 py-5 border-2 border-[#rgba(17, 17, 17, 0.1)] rounded-2xl shadow-md lg:h-32 mb-6">
        <h2 class="font-bold text-xl">${inputDonateAmountNumber} Taka Donated for ${place}</h2>
        <p class="bg-slate-100 px-5 py-2">Date: ${new Date().toString()}</p>
        </div>
        `;

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



// Donation Card - 2
document.getElementById('btn-donate-now2').addEventListener('click', function(){

    const inputDonateAmount = document.getElementById('input-donation-amount2').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
  
    if(inputDonateAmountNumber >= 0){

        const currentDonationAmount = document.getElementById('btn-current-donate-amount2').innerText;
        const currentDonationNumber = parseFloat(currentDonationAmount);

        const balance = document.getElementById('money-balance').innerText;
        const balanceNumber = parseFloat(balance).toFixed(2);

        if(inputDonateAmountNumber > balanceNumber){
            alert('You have insufficient balance. Please enter a different amount');
            return;
        }

        // adding the donation amount
        const donationAdded = currentDonationNumber + inputDonateAmountNumber;

        document.getElementById('btn-current-donate-amount2').innerText = donationAdded.toFixed(2);
        
        
        // taking away from balance
        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance.toFixed(2);

        alert('Congrats! Successful Donation!');

        const showModal = document.getElementById('my_modal_1');
        showModal.showModal();
        
        // transaction history 
        const place = document.getElementById('donation-place2').innerText;
        const newDiv = document.createElement('div');
        
        newDiv.innerHTML = `
        <div class="space-y-3 px-7 py-5 border-2 border-[#rgba(17, 17, 17, 0.1)] rounded-2xl shadow-md lg:h-32 mb-6">
        <h2 class="font-bold text-xl">${inputDonateAmountNumber} Taka Donated for ${place}</h2>
        <p class="bg-slate-100 px-5 py-2">Date: ${new Date().toString()}</p>
        </div>
        `;

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



// Donation Card - 3
document.getElementById('btn-donate-now3').addEventListener('click', function(){

    const inputDonateAmount = document.getElementById('input-donation-amount3').value;
    const inputDonateAmountNumber = parseFloat(inputDonateAmount);
  
    if(inputDonateAmountNumber >= 0){

        const currentDonationAmount = document.getElementById('btn-current-donate-amount3').innerText;
        const currentDonationNumber = parseFloat(currentDonationAmount);

        const balance = document.getElementById('money-balance').innerText;
        const balanceNumber = parseFloat(balance).toFixed(2);

        if(inputDonateAmountNumber > balanceNumber){
            alert('You have insufficient balance. Please enter a different amount');
            return;
        }

        // adding the donation amount
        const donationAdded = currentDonationNumber + inputDonateAmountNumber;

        document.getElementById('btn-current-donate-amount3').innerText = donationAdded.toFixed(2);
        
        
        // taking away from balance
        const newBalance = balanceNumber - inputDonateAmountNumber;
        document.getElementById('money-balance').innerText = newBalance.toFixed(2);

        alert('Congrats! Successful Donation!');

        const showModal = document.getElementById('my_modal_1');
        showModal.showModal();
        
        // transaction history 
        const place = document.getElementById('donation-place3').innerText;
        const newDiv = document.createElement('div');
        
        newDiv.innerHTML = `
        <div class="space-y-3 px-7 py-5 border-2 border-[#rgba(17, 17, 17, 0.1)] rounded-2xl shadow-md lg:h-32 mb-6">
        <h2 class="font-bold text-xl">${inputDonateAmountNumber} Taka Donated for ${place}</h2>
        <p class="bg-slate-100 px-5 py-2">Date: ${new Date().toString()}</p>
        </div>
        `;

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
