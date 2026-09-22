const videoid = "dQw4w9WgXcQ";
const youtube = "https://youtube.com/watch?q=";
const full = youtube + videoid;
const textinput = document.getElementById("textinput");
const accuracyout = document.getElementById("accuracy");
const hint = document.getElementById("hint");
var progress = youtube.length;
var accurate = 0;
var total = 0;
var accuracy = 100.0;
var shows = 0
function setHint(str) {
    hint.textContent = str;
}
function updateInput(e) {
    total += 1;
    if (textinput.value.length < youtube.length) {
        textinput.value = youtube;
        progress = youtube.length;
        total = 0;
        console.log("User attempting to delete YouTube link! undoing...");
    }
    if (textinput.value != full.slice(0, progress + 1)) {
        console.log(`User got it wrong! Undoing; Metadata:\n-Progress ${progress}\n-Value ${textinput.value}\n-E Value ${e.value}`);
        textinput.value = full.slice(0, progress);
        console.log(`Conclusion Metadata:\n-Progress ${progress}\n-Value ${textinput.value}\n-E Value ${e.value}`);
        setHint("Nope! Do you need to see it again?")
    }
    if (textinput.value === full) {
        setHint("You did it!")
    }
    if (textinput.value === full.slice(0, progress + 1)) {
        accurate += 1
        console.log(`User got it  correct! Undoing; Metadata:\n-Progress ${progress}\n-Value ${textinput.value}\n-E Value ${e.value}`)
        textinput.value = full.slice(0, progress + 1);
        console.log(`Conclusion Metadata:\n-Progress ${progress}\n-Value ${textinput.value}\n-E Value ${e.value}`)
        progress += 1;
        setHint("You got it! Keep it up!")
    }
    updateAccuracy()
}
function updateAccuracy() {
    accuracy = ((accurate - shows) / total) * 100;
    accuracyout.textContent = accuracy.toFixed(2)+"%";
}
function show() {
    shows += 1;
    document.getElementById('showbutton').textContent=videoid;
    setTimeout(() => {
        document.getElementById('showbutton').textContent='Show Video ID'
    }, 5000);
    updateAccuracy();
}
function reset() {
    shows = 0
    textinput.value = youtube;
    progress = youtube.length;
    accurate = 0;
    total = 0;
    accuracy = 100.0;
}
function bruh() {
    window.location.href = youtube+videoid
}
// NO PASTING WHATSOEVER
window.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Pasting is against our Terms Of Use!")
    bruh()
})
textinput.value = youtube;
textinput.addEventListener("input", updateInput);