import {toggle} from './toggle.js'
import {getCurrentLanguage} from './languages.js'
import {changeTheme} from './theme.js'
import { encrypt,decrypt,btnDelete,copyBtn,addClickListener,autoResizeTextarea } from './encryptor.js';
import {initializeHistory} from './historyManager.js';
import {applySavedTheme} from './theme.js'
const elements = {
    languages: document.getElementById('languages'),
    toggleLanguage: document.getElementById('nav-language'),
    history: document.getElementById('history'),
    toggleHistory: document.getElementById('nav-history'),
    closeHistory: document.getElementById('close-history'),
    languageEn: document.getElementById('language-en'),
    languageEs: document.getElementById('language-es'),
    btnEncrypt: document.getElementById('btn--encrypt'),
    btnDecrypt: document.getElementById('btn--decrypt'),
    deleteText: document.getElementById('btn-clear'),
    input: document.getElementById('input-text'),
    copy: document.getElementById('btn--copy'),
    output: document.getElementById('output-message'),
    listEncrypt: document.getElementById('encryptedHistory'),
    listDecrypt: document.getElementById('decryptedHistory')
};  
//Functions toggle
toggle(elements.languageEn, elements.languages);
toggle(elements.languageEs, elements.languages);
toggle(elements.toggleLanguage, elements.languages);
toggle(elements.toggleHistory, elements.history);
toggle(elements.listEncrypt, elements.history);
toggle(elements.listDecrypt, elements.history);
toggle(elements.closeHistory, elements.history);
elements.input.addEventListener('input', autoResizeTextarea);



btnDelete(elements.deleteText, elements.input);
copyBtn(elements.copy, elements.output);
addClickListener(elements.btnEncrypt,encrypt)
addClickListener(elements.btnDecrypt,decrypt)
document.addEventListener('DOMContentLoaded', ()=>{
    initializeHistory()
    getCurrentLanguage(elements.languages);
    changeTheme();
    applySavedTheme();
    autoResizeTextarea();
});