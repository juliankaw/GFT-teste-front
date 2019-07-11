const link = document.querySelector('.dropdown-menu a');
const menu = document.querySelector('.dropdown-menu');

link.addEventListener("click", (e)=>{
  e.preventDefault();
  menu.classList.toggle('activeClass');
})

link.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".content-drop").classList.toggle('active');
  
})

// código para clicar em qualquer lugar no body e remover o menu-dropdown

window.addEventListener('click', (e) => {
  if(!e.target.matches('.dropdown-menu a')){
    if(document.querySelector(".content-drop").classList.contains('active')){
      document.querySelector(".content-drop").classList.remove('active');
    }
  }
  
  
})

// ativa o menu mobile.

document.querySelector('.mobile-btn').addEventListener('click', function(){
  this.classList.toggle('active-button');
  document.querySelector('.mobile-menu').classList.toggle('active');
})
