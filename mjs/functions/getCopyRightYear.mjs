export function getCopyRightYear(containerId) {
    let copyRightYearContainer = document.getElementById(containerId)
    let year = new Date().getFullYear()
    copyRightYearContainer.innerHTML = year
}