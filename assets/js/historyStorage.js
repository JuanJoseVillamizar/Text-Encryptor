export function saveHistory (encryptedHistory,decryptedHistory) {
    try {
        localStorage.setItem('encryptedHistory', JSON.stringify(encryptedHistory));
        localStorage.setItem('decryptedHistory', JSON.stringify(decryptedHistory));
    } catch (error) {
        console.log('Error saving history to localStorage',error);
    }

}

export function loadHistory () {
    try {
            const encryptedHistory = JSON.parse(localStorage.getItem('encryptedHistory')) || [];
            const decryptedHistory = JSON.parse(localStorage.getItem('decryptedHistory')) || [];
            return {encryptedHistory, decryptedHistory};
        } catch (error) {
        console.log('Error loading history from localStorage', error);
        return { encryptedHistory: [], decryptedHistory: [] };
    }
}