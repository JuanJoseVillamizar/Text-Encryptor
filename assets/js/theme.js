
export function changeTheme() {
    const themeToggle = document.getElementById('nav-theme')
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault()
        const body = document.querySelector('body')
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme')
        } else {
            body.classList.add('dark-theme')
        }
    })
}