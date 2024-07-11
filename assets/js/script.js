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
    let valueSkill = renderSkill.textContent

    if ((skill === 'skill1') || (skill === 'skill2') || (skill === 'skill3') || (skill === 'skill4')) {
        let infor1 = document.querySelector('#infor1')
        infor1.textContent = valueSkill
    } else {
        let infor2 = document.querySelector('#infor2')
        infor2.textContent = valueSkill
    }
}
function returnToNormal () {
    let infor1 = document.querySelector('#infor1')
    let infor2 = document.querySelector('#infor2')

    infor1.textContent = "Hover over the skill"
    infor2.textContent = "Hover over the skill"
}