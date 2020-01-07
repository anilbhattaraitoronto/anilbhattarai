import { displaySection } from '/mjs/navigate/displaySection.mjs'
import { getCopyRightYear } from '/mjs/functions/getCopyRightYear.mjs'
import { navigateSections } from '/mjs/navigate/navigateSections.mjs'
import { posts } from '/mjs/displayData/posts.mjs'
import { renderTitles } from './displayData/renderTitles.mjs'
import { displayPosts } from './displayData/displayPosts.mjs'
import { navigatePosts } from './displayData/navigatePosts.mjs'
import { sideBarShowHide } from './functions/sideBarShowHide.mjs'



loadApp('masthead')
function loadApp(mastheadId) {
    let masthead = document.getElementById(mastheadId)

    masthead.addEventListener('click', function () {
        displaySection('main-page', 'main-link', 'active', 0)
    })

    getCopyRightYear('copy-right-year')
    displaySection('main-page', 'main-link', 'active', 0)
    navigateSections('main-nav', 'main-page', 'main-link', 'active')

    //render page nav titles

    renderTitles('home-nav', posts, 0)
    renderTitles('lang-nav', posts, 1)
    renderTitles('project-nav', posts, 2)
    renderTitles('blog-nav', posts, 3)

    // displayPosts('landing-content', 0, 0)


    navigatePosts('home-nav', 'landing-content', 0)
    navigatePosts('lang-nav', 'languages-content', 1)
    navigatePosts('project-nav', 'projects-content', 2)
    navigatePosts('blog-nav', 'blogs-content', 3)

    sideBarShowHide()
}

