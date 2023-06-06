const btnBurger = document.querySelector('.btn-burger');
const langCont = document.querySelector('.lang-cont');
const iconCont = document.querySelector('.icon-cont');

btnBurger.addEventListener('click', function() {
  langCont.classList.toggle('active');
  iconCont.classList.toggle('active');
});