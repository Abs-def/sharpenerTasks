//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle.innerText);

//headerTitle.textContent = 'archisman';
// headerTitle.innerHTML = '<h3>archiesaha</h3>';
//headerTitle.style.borderBottom = 'solid 2px black';

// let title = document.getElementsByClassName('title');
// console.log(title[0]);
// title[0].style.fontWeight = '900';
// title[0].style.color = 'green';
// let itemsByClass = document.getElementsByClassName('list-group-item');

// for(let i=0; i<itemsByClass.length; i++){
//     itemsByClass[i].style.fontWeight = 'bold';  //does not apply to the li element without class.
// }
// let itemsByTag = document.getElementsByTagName('li');

// for(let i=0; i<itemsByTag.length; i++){
//     itemsByTag[i].style.color = 'red'; //applies to all elements with the tag 'li'.
// }
//QUERY SELECTOR//
// let item2 = document.querySelector('.list-group-item:nth-child(2)');
// item2.style.background = 'green';
// let item3 = document.querySelector('.list-group-item:nth-child(3)');
// item3.style.visibility = 'hidden';
// QUERYSELECTORALL //
//let items = document.querySelectorAll('.list-group-item');
//console.log(items);
// items[1].style.color = 'green';
// let oddItems = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<oddItems.length; i++){
//     oddItems[i].style.background = 'green';
// }
// let items = document.querySelector('#items');
//console.log(items.parentNode);
//items.parentNode.style.background = 'grey';
// console.log(items.parentElement.parentElement);
// items.parentElement.parentElement.parentElement.style.background = 'yellow';
// console.log(items.childNodes);
// console.log(items.children);
// console.log(items.children[2]);
// items.children[2].textContent = 'archie';
// console.log(items.firstElementChild);
//items.firstElementChild.textContent = 'archie';
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color = 'blue';

//  CREATING NEW ELEMENT    //
let newDiv = document.createElement('div');

newDiv.setAttribute('class', 'newHello');
newDiv.setAttribute('id', 'hello1');
newDiv.title = 'hello div';
//  CREATE AND INSERT TEXT NODE //
let newText = document.createTextNode('hello world');
newDiv.appendChild(newText);
console.log(newDiv);
// adding new div before item lister //
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


//  adding new div before item 1    //
let newDiv1 = document.createElement('div');
newDiv1.setAttribute('class', 'newHello1');
newDiv1.setAttribute('id', 'newhello1');
newDiv1.title = 'hello div1';
let newText1 = document.createTextNode('hello world');
newDiv1.appendChild(newText1);

let container1 = document.querySelector('div .list-group');
let h2 = document.querySelector('div li');

container1.insertBefore(newDiv1, h2);