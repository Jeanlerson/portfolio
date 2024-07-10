// EVENTS
document.querySelectorAll('.menu .li').forEach(item => {
    item.addEventListener('click', clickEvent)
})
window.addEventListener('scroll', scrollHeader)
document.querySelectorAll('.skills-img img').forEach(item => {
    item.addEventListener('click', renderInforSillkFrame1)
})
document.querySelectorAll('.skills-img img').forEach(item => {
    item.addEventListener('click', renderInforSillkFrame2)
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
function renderInforSillkFrame1 (e) {
    let infor1 = document.querySelector('#infor1')
    let skill = e.target.getAttribute('data-descSkill')
    let renderSkill = document.querySelector(`p[data-descSkill=${skill}]`)

    if ((skill === 'skill1') || (skill === 'skill2') || (skill === 'skill3') || (skill === 'skill4')) {
        let valueSkill = renderSkill.textContent
        infor1.textContent = valueSkill
    }

}
function renderInforSillkFrame2 (e) {
    let infor2 = document.querySelector('#infor2')
    let skill = e.target.getAttribute('data-descSkill')
    let renderSkill = document.querySelector(`p[data-descSkill=${skill}]`)

    if ((skill === 'skill5') || (skill === 'skill6') || (skill === 'skill7') || (skill === 'skill8')) {
        let valueSkill = renderSkill.textContent
        infor2.textContent = valueSkill
    }

}