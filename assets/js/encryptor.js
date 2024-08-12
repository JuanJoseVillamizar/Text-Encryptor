const input = document.getElementById('input-text');
const copy = document.getElementById('btn--copy');
const emptyError = document.getElementById('snackbarError');
const advertisingText = document.getElementById('advertising-text');
const advertisingIcon= document.getElementById('advertising-icon');
export function encrypt(){
    if (validateText()){
        const dickeys = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"}
        const encrypted = input.value.replace(/a|e|i|o|u/g , match => dickeys[match]);
        console.log(encrypted);
        showMessage (encrypted)
    }
    return
}
export function decrypt(){
    if (validateText()) {
        const input = document.getElementById('input-text');
        const dickeys = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"}
        const decrypted = input.value.replace(/ai|enter|imes|ober|ufat/g , match => dickeys[match]);
        console.log(decrypted);
        showMessage (decrypted);
    }
    return
}

function showMessage(message) {
    const outputBox = document.getElementById('output-section')
    const image = document.getElementById('output-image')
    const title = document.getElementById('output-title')
    const output = document.getElementById('output-message')
    image.style.display = 'none'
    title.style.display = 'none'
    outputBox.style.justifyContent = 'space-between'
    output.style.fontSize = '1.6rem'
    copy.style.display = 'block'
    copy.style.visibility = 'visible'
    output.textContent = message;
}


function deleteText(element) {
    element.value =''
    element.textContent = ''
}

export function btnDelete(trigger,element) {
    trigger.addEventListener('click', ()=>{
        deleteText(element)
    })
}

export function copyBtn(trigger,element) {
    trigger.addEventListener('click', ()=>{
        navigator.clipboard.writeText(element.textContent)
        alert('Texto copiado!')
    })
}

export function addClickListener(trigger,callback) {
    trigger.addEventListener('click',()=>{
        callback()
    } )
}

function validateText() {
    
    if (input.value.length === 0){
        emptyError.className = "show"
        setTimeout(()=>{ emptyError.className = emptyError.className.replace("show", ""); }, 3000);
    return false;
    }
    const regex = new RegExp(/^[a-z\s]*$/);
    advertisingText.classList.remove('error-mode');
    advertisingIcon.classList.remove('error-mode');
    if(!regex.test(input.value)){
        setTimeout(() => {
            advertisingText.classList.add('error-mode');
            advertisingIcon.classList.add('error-mode');
        }, 10);
        return false; 
    }
    return true;
}