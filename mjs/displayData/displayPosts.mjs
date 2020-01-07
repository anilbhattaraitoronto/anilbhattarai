import { posts } from '/mjs/displayData/posts.mjs'

export function displayPosts(containerId, itemIndex, postIndex) {
    let postContainer = document.getElementById(containerId)
    let post = posts[itemIndex].posts[postIndex]
    postContainer.innerHTML = post
}