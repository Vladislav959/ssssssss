document.body.scrollTo({top: 0}) 
  console.log(document.documentElement.clientWidth)
if(document.documentElement.clientHeight >= 750){
  
}
  
    let was = true;
    const resizeObserver = new ResizeObserver(entries => {
          console.log(entries[0].target.clientHeight)
      if(entries[0].target.clientHeight < 750){
          was = false;
          onceWheel(()=>{
            },()=>{
              })
      window.removeEventListener('wheel',onScrollEventHandler);
      
      window.removeEventListener('mousewheel',onScrollEventHandler);
      
      window.removeEventListener('DOMMouseScroll',onScrollEventHandler);
      
          document.body.classList.add("scroll")
          document.querySelector(".pages").setAttribute("style","transform: translate3d(0px, 0px, 0px);")
      }
  }
    )
    const modalHandler = ()=>{
      if(modalcontainer.classList.contains("visible")){
        if(was || (window.innerHeight >= 700 && window.innerWidth >= 1000)){
          console.log("j")
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
      document.body.classList.add("scroll")
      
      document.querySelector(".pages").setAttribute("style","transform: translate3d(0px, 0px, 0px);")
    }
      else{
        
      window.removeEventListener('wheel',onScrollEventHandler); window.removeEventListener('mousewheel',onScrollEventHandler);
      
      window.removeEventListener('DOMMouseScroll',onScrollEventHandler);
      document.body.classList.remove('scroll')
      }
      modalcontainer.classList.toggle("visible")
    }
    resizeObserver.observe(document.body)
    const modalcontainer = document.querySelector(".modalcontainer")
    document.getElementById("openmodal").addEventListener("click", modalHandler)
    document.getElementById("openmodal").addEventListener("touchend", modalHandler)
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
  
  
