import { blogPosts } from '/mjs/displayData/postData/blogPosts.mjs'
import { homePosts } from '/mjs/displayData/postData/homePosts.mjs'
import { langPosts } from '/mjs/displayData/postData/langPosts.mjs'
import { projectPosts } from '/mjs/displayData/postData/projectPosts.mjs'

function makeTitleArray(obj) {
    let titleArray = obj.map(obj => `<li class="page-nav-link">${obj.title}</li>`)
    return titleArray
}

function makePostArray(obj) {
    let postArray = obj.map(obj =>
        `
        <div class="post">
            <h4 class="post-title">${obj.title}</h4>
            <p class="post-date"> ${obj.date}</p>
            <div class="post-content">${obj.content}</div>
        </div>
        `
    )
    return postArray
}


export let posts = [
    {
        posts: makePostArray(homePosts),
        postTitles: makeTitleArray(homePosts)
    },
    {
        posts: makePostArray(langPosts),
        postTitles: makeTitleArray(langPosts)
    },
    {
        posts: makePostArray(projectPosts),
        postTitles: makeTitleArray(projectPosts)
    },
    {
        posts: makePostArray(blogPosts),
        postTitles: makeTitleArray(blogPosts)
    },
]

