const textFeild = document.getElementById("textField");
const characterCounter = document.getElementById("characterCounter")
const remainingCounter = document.getElementById("remainingCounter")
const wordCounter = document.getElementById("wordCounter")

let maxCharacterCount = 150;
let userString = ""
let wordCount = 0;
let wordArray = [];

const countCharacter = (e) => {
    let characters = e.target.value
    if(characters.length > 150){
        return
    }
    else{
        userString = userString + characters;
        characterCounter.innerText = characters.length + " Characters";
        remainingCounter.innerText = maxCharacterCount - characters.length + " Remaining";
    }

    let matches = characters.match(/[\w\d\’\'-]+/gi);
    wordCount = matches ? matches.length : 0;
    wordCounter.innerText = wordCount + " Words"

}
textFeild.addEventListener("keyup", countCharacter);