const videoid = "dQw4w9WgXcQ";
const youtube = "https://youtube.com?q=";
const full = youtube + videoid;
const input = document.getElementById("textinput");
var progress = youtube.length;
function updateInput() {
    if (input.value.length < youtube.length) {
        input.value = youtube;
    }
    if (input.value != full.slice(0, progress)) {
        progress += 1;
    }
    if (input.value != full.slice(0, progress - 1)) {
        input.value = full.slice(0, progress - 1);
    }
}
// NO PASTING WHATSOEVER
window.addEventListener("paste", (e) => {
    e.preventDefault();
})