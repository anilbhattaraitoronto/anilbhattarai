import { renderTitles } from '/mjs/displayData/renderTitles.mjs'
import { posts } from '/mjs/displayData/posts.mjs'
import { displayPosts } from '../displayData/displayPosts.mjs'

export function displaySection(sectionClass, linkClass, activeClass, index = 0) {
    let pageTitles = ['Home', 'Languages', 'Projects', 'Blogs']

    let pageTitleContainer = document.getElementById('page-title')

    let sections = Array.from(document.getElementsByClassName(sectionClass))

    let links = Array.from(document.getElementsByClassName(linkClass))

    let pageNavs = document.querySelectorAll('.page-nav')

    sections.forEach(section => section.style.display = 'none')

    links.forEach(link => link.classList.remove(activeClass))

    pageNavs.forEach(nav => nav.style.display = 'none')

    sections[index].style.display = 'block'

    links[index].classList.add(activeClass)
    pageNavs[index].style.display = 'block'


    pageTitleContainer.innerHTML = pageTitles[index]
    displayPosts('landing-content', 0, 0)
    displayPosts('languages-content', 1, 0)
    displayPosts('projects-content', 2, 0)
    displayPosts('blogs-content', 3, 0)

}