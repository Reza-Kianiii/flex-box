let menu = document.querySelector(".header_icons");
let mainmenu = document.querySelector(".contianer_toggle  >i");
let sidebar = document.querySelector(".normal");
mainmenu.addEventListener("click", () => {
    console.log(mainmenu.className)
    if (mainmenu.className.includes("off")) {
    let indexclass = mainmenu.className.search("off");
    let valuereal = mainmenu.className.slice(0, indexclass);
    mainmenu.classList = "";
    mainmenu.className = valuereal + "on";
    sidebar.style.left = 0;


  } else if (mainmenu.className.includes("on")) {
    let indexclass = mainmenu.className.search("on");
    let valuereal = mainmenu.className.slice(0, indexclass);
    mainmenu.classList = "";
    mainmenu.className = valuereal + "off";
    sidebar.style.left=-11+"rem"  
}
});
window.onresize=()=>{
if(document.body.clientWidth>995)
{
    sidebar.className="";
    sidebar.className='normal'
}
else{
    sidebar.classList="";
    sidebar.className='sizemall'
}
    //   if(document.width >'992'+px)
// {
//     alert('reza kaini')
// }
}