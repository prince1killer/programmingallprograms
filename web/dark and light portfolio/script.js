const navMenu = document.querySelector('.nav-menu'),
  navToggle = document.querySelector('.nav-toggle'),
  navClose = document.querySelector('.nav-close') ;

if (navToggle) {
  navToggle.addEventListener('click', () => {
    // alert('its working')
    navMenu.classList.add('show-menu')
    console.log(navMenu)
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// ====================================== Skills ==================================
const skillsContent = document.getElementsByClassName('skill-content'),
      skillsHeader = document.querySelectorAll('.skills-header');

      function toggleSkills(){
        let itemsClass =this.parentNode.className
        for(i=0;i<skillsContent.length;i++){
          skillsContent[i].className = 'skill-content skills-close'
        }
        if(itemsClass === 'skill-content skills-close'){
          this.parentNode.className = 'skill-content skills-open'
        }
        
      }

        skillsHeader.forEach((el)=>{
          el.addEventListener('click',toggleSkills)
        })

        // ===================== Qualification ===================================
        const tabs = document.querySelectorAll('[data-target]'),
              tabContents = document.querySelectorAll('[data-content]');
              console.log(tabContents)
              tabs.forEach(tab =>{//==================================================Work Reamining================================
                tab.addEventListener('click',()=>{
                  const target = document.querySelector(tabs.dataset.target)
                  console.log(target);
                  tabContents.forEach(tabContents =>{
                    tabContents.classList.remove('quali-active')
                  })
                  target.classList.add('quali-active')
                  tab.forEach(tab=>{
                    tab.classList.remove('quali-active')
                  })
                  tab.classList.add('quali-active')
                })
              })
// ======================================Services============================================================
const modalView = document.querySelectorAll(".services-modal"),
      modalBtns = document.querySelectorAll(".services-button"),
      modalClose =document.querySelectorAll(".services-modal-close");

let modal = function(modalClick){
  modalView[modalClick].classList.add('active-modal');
}
modalBtns.forEach((modalBtns,i) => {
  modalBtns.addEventListener('click',()=>{
    modal(i);
  })
})

modalClose.forEach((modalClose)=>{
  modalClose.addEventListener("click",()=>{
    modalView.forEach((modalViews)=>{
      modalViews.classList.remove('active-modal')
    })
  })
})
