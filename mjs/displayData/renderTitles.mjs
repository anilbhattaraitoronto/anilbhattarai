export function renderTitles(navId, item, index = 0) {
    let titles = item[index].postTitles
    let nav = document.getElementById(navId)
    titles.forEach(title => {
        nav.innerHTML += title
    })
}