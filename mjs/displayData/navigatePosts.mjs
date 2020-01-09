import { displayPosts } from "./displayPosts.mjs"

export function navigatePosts(navId, containerId, itemIndex) {
    let nav = document.getElementById(navId)
    let links = Array.from(nav.children)

    nav.addEventListener('click', (event) => {
        links.forEach(link => link.classList.remove('active'))
        let targetItem = event.target
        let targetIndex = links.indexOf(targetItem)

        if (targetIndex !== -1) {

            displayPosts(containerId, itemIndex, targetIndex)
            links[targetIndex].classList.add('active')
            console.log(targetIndex)
        }
    })
}