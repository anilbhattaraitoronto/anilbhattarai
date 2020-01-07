import { displaySection } from "./displaySection.mjs"
import { posts } from "/mjs/displayData/posts.mjs"
import { renderTitles } from '/mjs/displayData/renderTitles.mjs'

export function navigateSections(navId, sectionClass, linkClass, activeClass) {
    let nav = document.getElementById(navId)
    let links = Array.from(document.getElementsByClassName(linkClass))
    nav.addEventListener('click', (event) => {
        let targetItem = event.target
        let targetIndex = links.indexOf(targetItem)
        if (targetIndex !== -1) {
            displaySection(sectionClass, linkClass, activeClass, targetIndex)
        }
    })
}


