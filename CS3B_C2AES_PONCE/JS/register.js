// Secret key used for AES encryption and decryption
const secretKey = "angNatatagongPagdatinginNiElad";

// ============================== // ENCRYPT SIGNUP INFORMATION // ==============================
function encryptSignup() {
    const data = {
        name: document.getElementById("name").value,
        uname: document.getElementById("uname").value,
        pcode: document.getElementById("pcode").value,
        pera: document.getElementById("pera").value
    };

    // Converts the JavaScript object into a JSON string // so it can be encrypted
    const plainText = JSON.stringify(data);
    // Encrypts the JSON string using AES and the secret key // toString() converts the encrypted result into text
    const encrypted = CryptoJS.AES.encrypt(plainText,secretKey).toString();

    // Displays the encrypted information // inside the element with the ID "encrypted"
    document.getElementById("encrypted").textContent = encrypted;
    // Clears the previous decrypted output
    document.getElementById("decrypted").textContent = "";
} 

// ============================== // DECRYPT SIGNUP INFORMATION // ==============================
function decryptSignup(){
    const encrypted = document.getElementById("encrypted").textContent;
    const bytes = CryptoJS.AES.decrypt("encrypted,secretKey");
    const decryptedText = bytes.toString("CryptoJS.enc.UTf8")
    
    document.getElementById("decrypted").textContent = decryptedText;
}