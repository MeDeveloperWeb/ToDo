import isLocalStorageAvailable from "../utils/checkStorage";

export default function updateData (key, value) {
    if (!isLocalStorageAvailable) return;
    
    localStorage.setItem(key, JSON.stringify(value));
}