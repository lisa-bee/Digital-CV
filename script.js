window.addEventListener('load', loadPage)

function loadPage() {
    writeTitle()
    addSmoothScrollListeners()
}

let index = 0;
const text = 'Hello, I´m Lisa';
const speed = 110;

function writeTitle() {
    if (index < text.length) {
        document.getElementById("title").innerHTML += text.charAt(index);
        index++;
        setTimeout(writeTitle, speed);
    }
}

function addSmoothScrollListeners() {
    const buttons = document.querySelectorAll('.grid-main-child2 a')

    for (const button of buttons) {
        button.addEventListener('click', scrollToElement)
    }
}

/**
 * 
 * @param {MouseEvent} event 
 */
function scrollToElement(event) {
    const idToSearchFor = event.target.id

    const div = document.querySelector('div#' + idToSearchFor)
    div.scrollIntoView({ behavior: 'smooth' })
}


/**
 * 
 */
function showHiddenContent() {
    document.querySelector('.education-child1 div').style.display = "unset"
    document.querySelector('.education-child1 h2').style.display = "none"
    document.querySelector('.education-child1').style.background = "grey"
    document.querySelector('.education-child1').style.color = "black"
}

function hideHiddenContent() {
    document.querySelector('.education-child1 h2').style.display = "unset"
    document.querySelector('.education-child1 div').style.display = "none"
    document.querySelector('.education-child1').style.background = "black"
    document.querySelector('.education-child1').style.color = "white"
}
