let sidnav=document.querySelector('.Contianer_navbar');

function manage_menu(){
    
    
    sidnav.classList.remove('sidnav-close')
        sidnav.classList.add('sidnav-open');
   
}


function close_sidnav(){
    sidnav.classList.remove('sidnav-open')
    sidnav.classList.add('sidnav-close')
}