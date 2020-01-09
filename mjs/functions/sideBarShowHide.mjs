export function sideBarShowHide() {
    let showButton = document.getElementById('page-nav-menu-show')
    let hideButton = document.getElementById('page-nav-menu-hide')
    let sideBar = document.getElementById('page-nav')

    let pageNavLinks = document.querySelectorAll('.page-nav-link')

    showButton.addEventListener('click', () => {
        sideBar.classList.toggle('show-hide')
    })
    hideButton.addEventListener('click', () => {
        sideBar.classList.toggle('show-hide')
    })

    pageNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideBar.classList.toggle('show-hide')
        })
    })

}