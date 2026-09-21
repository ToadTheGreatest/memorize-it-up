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
function updateInput(_) {
    total = 1;
    if (input.value.length < youtube.length) {
        input.value = youtube;
        progress = youtube.length
        total -= 1;
    }
    if (input.value != full.slice(0, progress)) {
        progress += 1;
        accurate += 1;
    }
    if (input.value == full) {
        window.location.reload();
    }
    if (input.value != full.slice(0, progress - 1)) {
        input.value = full.slice(0, progress - 1);
    }
}
function updateAccuracy() {
    accuracy = (accurate / total) * 100;
    accuracyout.value = toString(accuracy) + "%";
}
// NO PASTING WHATSOEVER
window.addEventListener("paste", (e) => {
    e.preventDefault();
})
input.value = youtube;
input.addEventListener("input", updateInput);