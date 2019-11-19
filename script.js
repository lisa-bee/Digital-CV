window.addEventListener('load', loadPage)

function loadPage() {
    writeTitle()
    addSmoothScrollListeners()
    showHiddenContent()
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
 * 
 * @param {MouseEvent} event 
 */
function scrollToElement(event) {
    const idToSearchFor = event.target.id

    const div = document.querySelector('div#' + idToSearchFor)
    div.scrollIntoView({ behavior: 'smooth' })
}




/* function eventOnHoverOverCircles() {
const circle = document.querySelectorAll('.education-child1')
*/


function showHiddenContent() {

 const circle = document.querySelectorAll('.education-child1 div')
 const div = document.querySelectorAll('.education-child1')
 const h2 = document.querySelectorAll('.education-child1 h2')
 
    for (const item of circle) {
        item.style.display = 'unset'   
    }

    for (const item of h2) {
        item.style.display ='none'
    }

    for (const item of div) {
        item.style.background ="grey"
    }
  

    // document.querySelector('.education-child1 div').style.display = "unset"//the loop we did now
    // document.querySelector('.education-child1 h2').style.display = "none"//saperate for loop 
    // document.querySelector('.education-child1').style.background = "grey" // this and the one below same for loop
    // document.querySelector('.education-child1').style.color = "black"
}

function hideHiddenContent() {
    const circle = document.querySelectorAll('.education-child1 div')
    const div = document.querySelectorAll('.education-child1')
    const h2 = document.querySelectorAll('.education-child1 h2')
 

    for (const item of circle) {
        item.style.display = 'none'
    }

    for (const item of h2) {
        item.style.display ='unset'
        item.style.color ='white'
    }

    for (const item of div) {
        item.style.color = 'black'
        item.style.background ='black'
    }


    // document.querySelector('.education-child1 h2').style.display = "unset"//new loop
    // document.querySelector('.education-child1 div').style.display = "none"//new loop
    // document.querySelector('.education-child1').style.background = "black"//this and one below same for loop
    // document.querySelector('.education-child1').style.color = "white"
}
