
export function changeTheme() {
    const themeToggle = document.getElementById('nav-theme')
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault()
        const body = document.querySelector('body')
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme')
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme')
            localStorage.setItem('theme', 'dark');
        }
    })
}
export function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.querySelector('body');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}