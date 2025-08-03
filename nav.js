const navSlide = () =>{
    const burger= document.querySelector('.burger')
    const nav=document.getElementById('navbar')
    const project= document.getElementById('projects')
    const dropdown=document.querySelector('.dropdown')
    const navLinks= document.querySelectorAll( '#navbar li')
    burger.addEventListener('click', ()=>{
         nav.classList.toggle('nav-active')
            navLinks.forEach(link =>{
                link.style.animation= `navLinkFade 0.5s ease forwards 0.25s`
        })
        project.addEventListener('click',()=>{
            dropdown.classList.add('active')
        })
        burger.classList.toggle('toggle')
    }) 
    
}
navSlide();