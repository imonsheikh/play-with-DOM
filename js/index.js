/**
 * Single Element Selector
 */

const header = document.getElementById('header')
header.style.color = 'blue'

const uniquePara = document.querySelector('#unique-para')
uniquePara.style.border = '2px solid red'
const another  = document.querySelector('.info')
// console.log(another);


/**
 * Multiple Eleemnt Selector
 */
const myTags = document.getElementsByTagName('p')
// console.log(myTags);

for(let i = 0; i< myTags.length; i++){
    // console.log(myTags[i]);
    const element = myTags[i]
    element.style.backgroundColor = 'green'
    element.style.fontSize = "40px"
    
}


const allClassElements = document.getElementsByClassName('info')
// console.log(allClassElements);

for(const element of allClassElements){
    element.style.border = "4px solid blue"
}

const myParas = document.querySelectorAll('.info')
// console.log(myParas[0]);


/**
 * Nodes vs element in DOM
 */

const container2 = document.querySelector('.container2')
// console.log(container2.childNodes);
// console.log(container2.children);


/**
 * DOM
 */

const item2 = document.getElementById('item-2')
// console.log(item2);
const parent = item2.parentElement.children
const parent2 = item2.parentNode

// console.log(parent, parent2);

//nextElementsSibling VS nextSibling
const nextSibling = item2.nextElementSibling
const previous = item2.previousElementSibling
// console.log(nextSibling, previous);

const nextSiblingNodes = item2.nextSibling
const previousSiblingNodes = item2.previousSibling
// console.log(nextSiblingNodes, previousSiblingNodes);

//innerText || textContent || innerHTML
const container4 = document.querySelector('.container4')
// console.log(container4.innerText);
// console.log(container4.textContent);


// setAttribute() || getAttribute()  || removeAttribute()
const myBtn = document.getElementById('myButton')
myBtn.setAttribute('class', 'btn btn-primary')
myBtn.setAttribute('disabled', true)
console.log(myBtn);


// - Creating an element and append
// - Add class name  || classList[add(),remove()]
// - append Child vs append
// - remove() or remove Child()
const container5 = document.querySelector('.container5')
const p = document.createElement('p')
p.innerText = "I am created by js dynamically"
// container5.appendChild(p)

const h1 = document.createElement('h1')
h1.textContent = "I am h1"
h1.className = "common-class"
// h1.classList.add('common-class')
container5.append(h1, p)

console.log(p);
console.log(h1);
console.log(container5);



// remove VS removeChild 
// container5.remove()
container5.removeChild(p)
// container5.removeChild(p)