window.addEventListener('load', loadPage)

function loadPage() {
    writeTitle()
}

const i = 0;
const txt = 'Hello, I´m Lisa';
const speed = 50;

function writeTitle() {
    if (i < txt.length) {

        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeTitle, speed);
    }
}