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
let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}