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
let item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.background = 'green';
let item3 = document.querySelector('.list-group-item:nth-child(3)');
item3.style.visibility = 'hidden';