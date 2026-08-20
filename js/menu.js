window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolling',window.scrollY > 120)
})