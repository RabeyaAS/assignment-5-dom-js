
function showSection(id){
    console.log('show section function');

    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function showBackgroundColor(id){
    document.getElementById('btn-history').classList.remove('bg-slate-200');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.add('bg-slate-200');

    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-slate-200');


    document.getElementById(id).classList.add('bg-[#B4F461]');
    document.getElementById(id).classList.remove('bg-slate-200');

}

function onClickBlog(){
    location.href = 'blog.html';
}

function onClickHome(){
    location.href = 'home.html';
}


