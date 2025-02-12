const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwButtonOne = document.querySelector("#pw-btn1")
let pwButtonTwo = document.querySelector("#pw-btn2")
let generateButton = document.querySelector("#generate-btn")
let digitNumber = document.getElementById("digit")
let inValid = document.querySelector(".invalid")

generateButton.addEventListener("click", function() {
    pwButtonOne.textContent = ""
    pwButtonTwo.textContent = ""

    if (digitNumber.value >3 && digitNumber.value < 26){
        for (let i = 0; i < digitNumber.value; i++) {
            let generatePw1= Math.floor(Math.random() * characters.length)
            let generatePw2 = Math.floor(Math.random() * characters.length)

            pwButtonOne.textContent += characters[generatePw1]
            pwButtonTwo.textContent += characters[generatePw2]
            inValid.textContent = ""
        }
    } else {
        inValid.textContent = "invalid input"  
    } 
})

const copyToClipboard = (element) => {
    const textToCopy = element.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => console.log("Copied to clipboard!"))
        .catch(err => console.error("Copy failed:", err));
}

