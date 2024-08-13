import {saveHistory, loadHistory} from './historyStorage.js';
import { toggle } from './toggle.js';

const maxHistoryLength = 5;
const maxTextLength = 25;
const input = document.getElementById('input-text');
let encryptedHistory = [];
let decryptedHistory = [];
const deleteHistory = document.getElementById('delete-history');
const history = document.getElementById('history')
export function updateHistory(type, message) {
    if (type === 'encrypted') {
        if (encryptedHistory.length >= maxHistoryLength) {
            encryptedHistory.shift(); //Remove the oldest item
        }
        encryptedHistory.push(message);
    }else if (type === 'decrypted') {
        if(decryptedHistory.length >= maxHistoryLength) {
            decryptedHistory.shift(); //Remove the oldest item
        }
        decryptedHistory.push(message);
    }
    saveHistory(encryptedHistory,decryptedHistory)
    renderHistory()
}

export function renderHistory() {
    const encryptedList = document.getElementById('encryptedHistory')
    const decryptedList = document.getElementById('decryptedHistory')
    encryptedList.innerHTML = '';
    decryptedList.innerHTML = '';

    encryptedHistory.forEach((message) => {
        const encryptedItem = message.length > maxTextLength ? message.slice(0,maxTextLength) + '...' : message;
        const li = document.createElement('li');
        li.textContent = encryptedItem;
        li.style.color = '#343A40';
        li.classList.add('list-sidebar');
        li.addEventListener('click', () => {
            input.value = message; // show message full
        });
        encryptedList.appendChild(li);
    });

    decryptedHistory.forEach((message)=>{
        const decryptedItem = message.length > maxTextLength ? message.slice(0,maxTextLength) + '...' : message;
        const li = document.createElement('li');
        li.textContent = decryptedItem;
        li.style.color = '#343A40';
        li.classList.add('list-sidebar');
        li.addEventListener('click', () => {
            input.value = message;// show full message
        });
        decryptedList.appendChild(li);
    })
}
export function initializeHistory() {
    const history = loadHistory();
    encryptedHistory = history.encryptedHistory; // upload encrypted history
    decryptedHistory = history.decryptedHistory; // upload decrypted history
    renderHistory();
}

deleteHistory.addEventListener('click', () => {
    encryptedHistory = [];
    decryptedHistory = [];
     saveHistory(encryptedHistory, decryptedHistory); // Save the empty history
     renderHistory(); // Update the UI to reflect the empty history
})