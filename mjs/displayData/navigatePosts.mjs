import { displayPosts } from "./displayPosts.mjs"

export function navigatePosts(navId, containerId, itemIndex) {
    let nav = document.getElementById(navId)
    nav.addEventListener('click', (event) => {
        let targetItem = event.target
        let links = Array.from(nav.children)
        let targetIndex = links.indexOf(targetItem)

        if (targetIndex !== -1) {
            displayPosts(containerId, itemIndex, targetIndex)
        }
    })
}