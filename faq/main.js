
        document.body.classList.add("scroll")
  const modalcontainer = document.querySelector(".modalcontainer")
  document.getElementById("openmodal").addEventListener("click", ()=>{
    modalcontainer.classList.toggle("visible")
  })
  document.getElementById("openmodal").addEventListener("touchend", ()=>{
    modalcontainer.classList.toggle("visible")
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

