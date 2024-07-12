// EVENTS
document.querySelectorAll('.menu .li').forEach(item => {
    item.addEventListener('click', clickEvent)
})
window.addEventListener('scroll', scrollHeader)
document.querySelectorAll('.skills-img img').forEach(item => {
    item.addEventListener('mouseover', renderInforSillkFrame)
    item.addEventListener('mouseout', returnToNormal)
})

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
    inforSkill.textContent = "Hover over the skill"
}