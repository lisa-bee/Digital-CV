window.addEventListener('load', loadPage)

/**
 * The function "loadPage" calls the following functions on window load.
 */
function loadPage() {
    writeTitle()
    addSmoothScrollListeners()
    addExperienceHoverListeners()
}

    let index = 0;
    const text = 'Hello, I´m Lisa';
    const speed = 250;


/**
 * This function writes out the title 
 * "Hello I'm Lisa" on window load.
 */
function writeTitle() {
        
    if (index < text.length) {
        document.getElementById('title').innerHTML += text.charAt(index);
        index++;
        setTimeout(writeTitle, speed);
    }
}
/**
 * This function selects all links in the .grid-main-child2 div
 * to trigger the scroll function "scrollToElement" on click.
 */
function addSmoothScrollListeners() {
    const buttons = document.querySelectorAll('.grid-main-child2 a')

    for (const button of buttons) {
        button.addEventListener('click', scrollToElement)
    }
}

/**
 * When the links with #id:s are clicked, scroll to
 * the related element with same #id will start.
 * @param {MouseEvent} event 
 */
function scrollToElement(event) {
    const idToSearchFor = event.target.id

    const div = document.querySelector('div#' + idToSearchFor)
    div.scrollIntoView({ behavior: 'smooth' })
}


/**
 * This function selects all children of the #experience div
 * and makes them apply to 'mouseenter' and 'mouseleave'.
 */
function addExperienceHoverListeners() {

    const circles = document.querySelectorAll('.rows > *')

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
