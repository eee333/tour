let buttonsPrev= document.querySelectorAll('.carousel-control-prev');
let buttonsNext= document.querySelectorAll('.carousel-control-next');

buttonsPrev.forEach(element => element.addEventListener('click', scrollPrev, false))

buttonsNext.forEach(element => element.addEventListener('click', scrollNext, false))
//buttonsPrev[0].addEventListener('click', scrollPrev, false);

function scrollPrev(e){
    let sliderId = this.dataset.bsTarget;
    let slider = document.querySelector(sliderId);
    slider.scroll({
        top: 0, 
        left: -1000, 
        behavior: 'smooth'
    });
}

function scrollNext(e){
    let sliderId = this.dataset.bsTarget;
    let slider = document.querySelector(sliderId);
    slider.scroll({
        top: 0, 
        left: 1000, 
        behavior: 'smooth'
    });
}