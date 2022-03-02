var menutoggle =document.querySelector('.toggle');
var menu =document.querySelector('.menu');

menutoggle.addEventListener('click',()=> {
  menutoggle.classList.toggle('active');
  menu.classList.toggle('active');

});
  