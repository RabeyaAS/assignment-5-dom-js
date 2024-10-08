console.log('features file added');

document.getElementById('btn-donation').addEventListener('click', function(){
    console.log('btn donation function');

    showBackgroundColor('btn-donation');
    showSection('donation-container');
})

document.getElementById('btn-history').addEventListener('click', function(){
    showBackgroundColor('btn-history');
    showSection('history-container');
})

// document.getElementById('history-container').addEventListener('click', function(){
//     donationPurpose();
// })


