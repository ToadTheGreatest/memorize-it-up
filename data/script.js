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
    total = 1;
    if (input.value.length < youtube.length) {
        input.value = youtube;
        progress = youtube.length
        total = 0;
    }
    if (input.value != full.slice(0, progress + 1)) {
        input.value = full.slice(0, progress);
        total -= 1
    }
    if (input.value === full) {
        alert("You did it!")
    }
    if (input.value === full.slice(0, progress + 1)) {
        input.value = full.slice(0, progress + 1);
        progress += 1;
    }
    updateAccuracy()
}
function updateAccuracy() {
    accuracy = (accurate / total) * 100;
    accuracyout.value = toString(accuracy) + "%";
}
function show() {
    if(showable){document.getElementById('showbutton').textContent=videoid;showable = false;setTimeout(() => {document.getElementById('showbutton').textContent='Show Video ID'}, 5000);}
}
// NO PASTING WHATSOEVER
window.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Pasting is against our Terms Of Use!")
})
input.value = youtube;
input.addEventListener("input", updateInput);