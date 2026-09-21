const videoid = "dQw4w9WgXcQ";
const youtube = "https://youtube.com?q=";
const full = youtube + videoid;
const input = document.getElementById("textinput");
const accuracyout = document.getElementById("accuracy")
var showable = true;
var progress = youtube.length;
var accurate = 0;
var total = 0;
var accuracy = 100;
function updateInput(e) {
    input.value = e
    total += 1;
    if (input.value.length < youtube.length) {
        input.value = youtube;
        progress = youtube.length
        total = 0;
        console.log("User attempting to delete YouTube link! undoing...")
        
    }
    if (input.value.length = youtube.length) {
        input.value = youtube;
        progress = youtube.length
        total = 0;
        console.log("You need to input something!")
    }
    if (input.value != full.slice(0, progress + 1)) {
        input.value = full.slice(0, progress);
        total -= 1
        console.log(`User got it wrong! Undoing; Metadata:\n-Progress${progress}\n-Value${input.value}\n-E Value${e.value}`)
    }
    if (input.value === full) {
        alert("You did it!")
    }
    if (input.value === full.slice(0, progress + 1)) {
        input.value = full.slice(0, progress + 1);
        console.log(`User got it  correct! Undoing; Metadata:\n-Progress${progress}\n-Value${input.value}\n-E Value${e.value}`)
        progress += 1;
    }
    updateAccuracy()
}
function updateAccuracy() {
    accuracy = (accurate / total) * 100;
    accuracyout.textContent = accuracy.toString() + "%";
}
function show() {
    if(showable){document.getElementById('showbutton').textContent=videoid;showable = false;setTimeout(() => {document.getElementById('showbutton').textContent='Show Video ID'}, 5000);}
}
function reset() {
    showable = true;
    progress = youtube.length;
    accurate = 0;
    total = 0;
    accuracy = 100;
}
// NO PASTING WHATSOEVER
window.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Pasting is against our Terms Of Use!")
})
input.value = youtube;
input.addEventListener("input", updateInput);
