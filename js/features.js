console.log('features file added');

document.getElementById('btn-donation').addEventListener('click', function(){
    console.log('btn donation function');
    
    showSection('donation-container');
})

document.getElementById('btn-history').addEventListener('click', function(){
    showSection('history-container');
})

