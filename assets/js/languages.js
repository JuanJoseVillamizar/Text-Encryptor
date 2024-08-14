export function getCurrentLanguage (element) {
    try {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            changeLanguage(savedLanguage);
        }
        element.addEventListener('click', (e)=>{
            const clickedElement = e.target.closest('.languages_item');
                if (clickedElement) {
                const language = clickedElement.getAttribute('data-language');
                localStorage.setItem('language', language);
                changeLanguage(language)
                }
        })
    } catch (error) {
        console.log(error)
    }

}
async function changeLanguage (language){
    try {
        const response = await fetch(`/assets/data/languages/${language}.json`);
        console.log(response)
        if (!response.ok){
            throw new Error(`Error fetching language data: ${response.status}`);
        }
        const data = await response.json();
        updateTexts(data)
    } catch (error) {
        console.log(error)
    }
}
function updateTexts(data) {
    const textsToChange = document.querySelectorAll('[data-section]');
    textsToChange.forEach(textToChange =>{
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value
        textToChange.innerHTML = data[section][value]
    })
    const placeholder =  data['input-section']['placeholder']
    if (placeholder) {
        const textarea = document.getElementById('input-text');
        textarea.value='';
        if (textarea) {
            textarea.placeholder = placeholder;
        }
    }
}
