
function showSection(id){
    console.log('show section function');

    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function showBackgroundColor(id){
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');

    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]');
}

function onClickBlog(){
    location.href = 'blog.html';
}

function onClickHome(){
    location.href = 'home.html';
}

// function donationPurpose(id){
//     document.getElementById('donation-place').classList.add('hidden');
//     document.getElementById('donation-place2').classList.add('hidden');

//     document.getElementById(id).classList.remove('hidden');

// }

// function donationPurpose(){
//     document.getElementById('donation-transaction');
// }


