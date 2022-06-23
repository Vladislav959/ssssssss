
  onepagescroll('.pages',{
      pageContainer: 'section',     
      animationType: 'ease-in-out', 
      animationTime: 700,        
      infinite: false,           
      pagination: false,             
      keyboard: false,               
      direction: 'vertical'        
       
    });
    let was = true;
    const resizeObserver = new ResizeObserver(entries => {
      if(entries[0].target.clientHeight < 700 && entries[0].target.clientWidth < 1000){
          was = false;
      window.removeEventListener('wheel',onScrollEventHandler);
          document.body.classList.add("scroll")
          document.querySelector(".pages").setAttribute("style","transform: translate3d(0px, 0px, 0px);")
      }
     
  }
    )
    const modalHandler = ()=>{
      if(modalcontainer.classList.contains("visible")){
        if(was || (window.innerHeight >= 700 && window.innerWidth >= 1000)){
        onepagescroll('.pages',{
          pageContainer: 'section',     
          animationType: 'ease-in-out', 
          animationTime: 700,        
          infinite: false,           
          pagination: false,             
          keyboard: false,               
          direction: 'vertical'        
           
        });
      }
    }
      else{
        
      window.removeEventListener('wheel',onScrollEventHandler);
      }
      modalcontainer.classList.toggle("visible")
    }
    resizeObserver.observe(document.body)
    const modalcontainer = document.querySelector(".modalcontainer")
    document.getElementById("openmodal").addEventListener("click", modalHandler)
    document.getElementById("openmodal").addEventListener("touchend", modalHandler)
  modalcontainer.querySelector(".modalwall").addEventListener("click", modalHandler)
  
  modalcontainer.querySelector(".modalwall").addEventListener("touchend", modalHandler)
    modalcontainer.querySelector(".cross").addEventListener("click",modalHandler)
    modalcontainer.querySelector(".cross").addEventListener("touchend",modalHandler)
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
  let activetab = 0;
  const tabsButtons = document.querySelectorAll(".techtabs p");
  tabsButtons.forEach(elem => {
    elem.addEventListener("click",()=>{
      const nowIndex = elem.dataset.tabindex
      if(nowIndex !== activetab){
  document.querySelector(".activetab").classList.remove("activetab");
  document.querySelector(`div[data-tabindex="${nowIndex}"]`).classList.add("activetab")
  
  document.querySelector(`.techtabs .active`).classList.remove("active")
  document.querySelector(`p[data-tabindex="${nowIndex}"]`).classList.add("active")
      activetab = elem.dataset.tabindex;
      }
    })
    elem.addEventListener("touchend",()=>{
      const nowIndex = elem.dataset.tabindex
      if(nowIndex !== activetab){
  document.querySelector(".activetab").classList.remove("activetab");
  document.querySelector(`div[data-tabindex="${nowIndex}"]`).classList.add("activetab")
  
  document.querySelector(`.techtabs .active`).classList.remove("active")
  document.querySelector(`p[data-tabindex="${nowIndex}"]`).classList.add("active")
      activetab = elem.dataset.tabindex;
      }
    })
  })
  
  const modalbuttons = document.querySelectorAll(".modalbuttons button");
  const modalpages = document.querySelector(".modalpages > div")
  modalbuttons[0].addEventListener("click",()=>{
    if(!modalbuttons[0].classList.contains("active")){
      
      modalpages.style.transform = "translateX(15px)"
      
      modalbuttons[0].classList.add("active")
      
      modalbuttons[1].classList.remove("active")
    }
  })
  modalbuttons[1].addEventListener("click",()=>{
    if(!modalbuttons[1].classList.contains("active")){
      
      modalpages.style.transform = "translateX(calc(-50% + 75px))"
      
      modalbuttons[1].classList.add("active")
      
      modalbuttons[0].classList.remove("active")
    }
  })
  modalbuttons[0].addEventListener("touchend",()=>{
    if(!modalbuttons[0].classList.contains("active")){
      
      modalpages.style.transform = "translateX(15px)"
      
      modalbuttons[0].classList.add("active")
      
      modalbuttons[1].classList.remove("active")
    }
  })
  modalbuttons[1].addEventListener("touchend",()=>{
    if(!modalbuttons[1].classList.contains("active")){
      
      modalpages.style.transform = "translateX(calc(-50% + 75px))"
      
      modalbuttons[1].classList.add("active")
      
      modalbuttons[0].classList.remove("active")
    }
  })