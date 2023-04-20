let sidnav=document.querySelector('.Contianer_navbar_mobile');
let iconsidnav=document.querySelector('.Contianer_navbar > i')
let sidnvae_open=document.querySelector('.sidnav-open');
function manage_menu(){
    console.log(sidnav)
    sidnav.classList.remove('Contianer_navbar_mobile')
     sidnav.classList.add('sidnav-open')
       
}


function close_sidnav(){
sidnav.classList.remove('sidnav-open');
sidnav.classList.add('Contianer_navbar_mobile');
    // sidnvae_open.classList.remove('sidnav-opne');
// sidnvae_open.classList.add('Contianer_navbar_mobile');
 
}