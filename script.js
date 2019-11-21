window.addEventListener('load', loadPage)

function loadPage() {
    writeTitle()
    addSmoothScrollListeners()
    addExperienceHoverListeners()
    hideHiddenContent()
}

let index = 0;
const text = 'Hello, I´m Lisa';
const speed = 250;

function writeTitle() {
    if (index < text.length) {
        document.getElementById('title').innerHTML += text.charAt(index);
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
 * When the links with #id's are clicked it will scroll to the related element.
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
function addExperienceHoverListeners() {

    const circles = document.querySelectorAll('#experience > *')

    for (const circle of circles) {
        circle.addEventListener('mouseenter', showHiddenContent)
        circle.addEventListener('mouseleave', hideHiddenContent)
    }
}

/**
 * On hover; hidden content and colors are revealed. 
 * @param {MouseEvent} event 
 */
function showHiddenContent(event) {

    const circle = event.target
    const div = circle.querySelector('div')
    const h2List = circle.querySelectorAll('h2')
 
    for (const h2 of h2List) {
        h2.style.display ='none'
    }
    div.style.display = 'block'
    circle.style.background ='lightgrey'
    circle.style.color = 'black'
}

/**
 * When not hovering; the hidden content goes back to be hidden.
 * The divs "original" content is shown again.
 * @param {MouseEvent} event 
 */
function hideHiddenContent(event) {
    
    const circle = event.target 
    const div = circle.querySelector('div')
    const h2List = circle.querySelectorAll('h2')

    for (const h2 of h2List) {
        h2.style.display = 'block'
        h2.style.color = 'white'
    }
    div.style.display = 'none'
    circle.style.background = 'black'
    
}
