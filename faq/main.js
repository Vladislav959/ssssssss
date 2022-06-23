
  document.body.classList.add("scroll")
const modalcontainer = document.querySelector(".modalcontainer")
    document.getElementById("openmodal").addEventListener("click", ()=>{
      modalcontainer.classList.toggle("visible")
    })
    document.getElementById("openmodal").addEventListener("touchend", ()=>{
      modalcontainer.classList.toggle("visible")
    })
  modalcontainer.querySelector(".modalwall").addEventListener("click", () => {
    modalcontainer.classList.toggle("visible");
  })
  
  modalcontainer.querySelector(".modalwall").addEventListener("touchend", () => {
    modalcontainer.classList.toggle("visible");
  })
    modalcontainer.querySelector(".cross").addEventListener("click",()=>{
  
      modalcontainer.classList.toggle("visible")
    })
    modalcontainer.querySelector(".cross").addEventListener("touchend",()=>{
  
      modalcontainer.classList.toggle("visible")
    })
  const menu = document.querySelector('.mobilemenu > div');
  menu.addEventListener('click', () => {
    
    
  document.querySelector(".pages").classList.toggle('menuactive');
  document.body.classList.toggle('menuactive');
  document.querySelector(".pages").setAttribute("style","transition: transform 700ms ease-in-out 0s;transform:none!important;")
  });
  menu.addEventListener('touchend', () => {
    
    
    document.querySelector(".pages").classList.toggle('menuactive');
    document.body.classList.toggle('menuactive');
    document.querySelector(".pages").setAttribute("style","transition: transform 700ms ease-in-out 0s;transform:none!important;")
    });

  
  const modalbuttons = document.querySelectorAll(".modalbuttons button");
  const modalpages = document.querySelector(".modalpages > div")
  modalbuttons[0].addEventListener("click",()=>{
    if(!modalbuttons[0].classList.contains("active")){
      
      modalpages.style.transform = "translateX(0)"
      
      modalbuttons[0].classList.add("active")
      
      modalbuttons[1].classList.remove("active")
    }
  })
  modalbuttons[1].addEventListener("click",()=>{
    if(!modalbuttons[1].classList.contains("active")){
      
      modalpages.style.transform = "translateX(calc(-50% + 30px))"
      
      modalbuttons[1].classList.add("active")
      
      modalbuttons[0].classList.remove("active")
    }
  })
  modalbuttons[0].addEventListener("touchend",()=>{
    if(!modalbuttons[0].classList.contains("active")){
      
      modalpages.style.transform = "translateX(0)"
      
      modalbuttons[0].classList.add("active")
      
      modalbuttons[1].classList.remove("active")
    }
  })
  modalbuttons[1].addEventListener("touchend",()=>{
    if(!modalbuttons[1].classList.contains("active")){
      
      modalpages.style.transform = "translateX(calc(-50% + 30px))"
      
      modalbuttons[1].classList.add("active")
      
      modalbuttons[0].classList.remove("active")
    }
  })
