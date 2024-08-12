
export function toggle(element, toggle) {
    try {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            if (toggle.classList.contains('hidden')) {
                toggle.classList.remove('hidden');
                toggle.classList.add('visible');
            } else {
                toggle.classList.remove('visible');
                toggle.classList.add('hidden');
            }
        });
    } catch (error) {
        console.log(error);
    }
}