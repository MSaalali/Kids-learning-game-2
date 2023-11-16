
function dragover(ev) {
 ev.preventDefault();
}
function drag(ev) {
 ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 if (ev.target.tagName !== "IMG") {
    ev.target.appendChild(document.getElementById(data));
 }
}
