document.querySelectorAll('.menu .li').forEach(item => {
    item.addEventListener('click', clickEvent)
})

function clickEvent(event) {
    document.querySelector('.menu .li.active').classList.remove('active')
    event.target.classList.add('active')
}