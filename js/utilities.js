console.log('utilities file added');
function showSection(id){
    console.log('show section function');
    
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


