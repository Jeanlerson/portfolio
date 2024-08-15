// EVENTS
document.querySelectorAll('.menu .li').forEach(item => {
    item.addEventListener('click', clickEvent)
})
window.addEventListener('scroll', scrollHeader)
document.querySelectorAll('.skills-img img').forEach(item => {
    item.addEventListener('mouseover', renderInforSillkFrame)
    item.addEventListener('mouseout', returnToNormal)
})
document.addEventListener('scroll', colorMenu)

// FUNCTIONS
function clickEvent(event) {
    document.querySelector('.menu .li.active').classList.remove('active')
    event.target.classList.add('active')
}
function scrollHeader() {
    let header = document.querySelector('header')
    header.classList.toggle('scrollMenu', window.scrollY > 0)
}
function renderInforSillkFrame (e) {
    let skill = e.target.getAttribute('data-descSkill')
    let renderSkill = document.querySelector(`p[data-descSkill=${skill}]`)

    if (renderSkill) {
        const valueSkill = renderSkill.textContent
        const inforSkill = document.querySelector('.infor-skills')
        inforSkill.textContent = valueSkill
    }
}
function returnToNormal () {
    let inforSkill = document.querySelector('.infor-skills')
    inforSkill.textContent = ""
}
function colorMenu () {
    const sections = document.querySelectorAll('section')
    const menuLinks = document.querySelectorAll('.ul-menu .li')
    
    let currentSection = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (scrollY >= sectionTop - 80) {
            currentSection = section.getAttribute('id')
        }
    })

    menuLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active')
        }
    })
}

// MOBILE
window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
};