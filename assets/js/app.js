import {toggle} from './toggle.js'
import {getCurrentLanguage} from './languages.js'
import {changeTheme} from './theme.js'

// Selectors 
const languages= document.getElementById('languages');
const toggleLanguage = document.getElementById('nav-language');
const history = document.getElementById('history');
const toggleHistory =document.getElementById('nav-history');
const closeHistory = document.getElementById('close-history');
const languageEn = document.getElementById('language-en');
const languageEs = document.getElementById('language-es');
//Functions toggle
toggle(languageEn,languages)
toggle(languageEs,languages)
toggle(toggleLanguage,languages)
toggle(toggleHistory,history)
toggle(closeHistory,history)
getCurrentLanguage(languages)
changeTheme()