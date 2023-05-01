const Top=document.querySelector('.top');
window.addEventListener('scroll',()=>{
    var y=window.scrollY;
    if(y>=600){
        Top.classList.add('active');
    }else{
        Top.classList.remove('active');
    }
});

const button=document.querySelector('.btn-show');
const navbar=document.querySelector('.navbar');

button.addEventListener('click',()=>{
    navbar.classList.toggle('show')
});