/*onepagescroll('.pages',{
    pageContainer: 'section',     
    animationType: 'ease-in-out', 
    animationTime: 700,        
    infinite: false,           
    pagination: false,             
    keyboard: false,               
    direction: 'vertical'        
     
  });
  let wasSmall = false; 
  let wasBig = false;
  
  const resizeObserver = new ResizeObserver(entries => {
    if(entries[0].target.clientHeight < 800 && !wasSmall && entries[0].target.clientHeight < 1000){
        wasSmall = true;
        wasBig = false
        console.log("hss")
		window.removeEventListener('wheel',onScrollEventHandler);
        document.body.setAttribute("style","overflow:scroll!important;overflow-x: hidden !important;")
        document.querySelector(".pages").setAttribute("style","transform: translate3d(0px, 0px, 0px);")
    }
   
}
  )
  
  resizeObserver.observe(document.body)
  */

document.body.classList.add("scroll");
const modalcontainer = document.querySelector(".modalcontainer");
document.getElementById("openmodal").onclick = () => {
  modalcontainer.classList.toggle("visible");
};
modalcontainer.querySelector(".modalwall").onclick = () => {
  modalcontainer.classList.toggle("visible");
};

modalcontainer.querySelector(".cross").onclick = () => {
  modalcontainer.classList.toggle("visible");
};
const menu = document.querySelector(".mobilemenu > div");
menu.addEventListener("click", () => {
  document.querySelector(".pages").classList.toggle("menuactive");
  document.body.classList.toggle("menuactive");
  document
    .querySelector(".pages")
    .setAttribute(
      "style",
      "transition: transform 700ms ease-in-out 0s;transform:none!important;"
    );
});

const modalbuttons = document.querySelectorAll(".modalbuttons button");
const modalpages = document.querySelector(".modalpages > div")
modalbuttons[0].onclick = ()=>{
  if(!modalbuttons[0].classList.contains("active")){
    
    modalpages.style.transform = "translateX(0)"
    
    modalbuttons[0].classList.add("active")
    
    modalbuttons[1].classList.remove("active")
  }
}
modalbuttons[1].onclick = ()=>{
  if(!modalbuttons[1].classList.contains("active")){
    
    modalpages.style.transform = "translateX(calc(-50% + 30px))"
    
    modalbuttons[1].classList.add("active")
    
    modalbuttons[0].classList.remove("active")
  }
}