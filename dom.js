// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// //delete event;
// itemList.addEventListener('click', removeItem);
// //filter event;
// filter.addEventListener('keyup', filterItems);

// function addItem(e){
//     e.preventDefault();

//     // get input value;
//     let newItem = document.getElementById('item');
//     console.log(newItem.value);
//     // get new description;
//     let newDes = document.getElementById('description');
//     // create new li element;
//     let li = document.createElement('li');
//     li.className = 'list-group-item';
//     // add text node with input value;
//     let des = document.createElement('div');
//     des.append(document.createTextNode(newDes.value));
//     li.appendChild(document.createTextNode(newItem.value));
//     li.appendChild(des);

//     // create delete button;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//     //append text node to delete button;
//     deleteBtn.appendChild(document.createTextNode('delete'));

//     //create edit button
//     let editBtn = document.createElement('button');
//     editBtn.className = 'btn btn-sm float-right';
//     editBtn.appendChild(document.createTextNode('edit'));

//     //append buttons to li
//     li.appendChild(deleteBtn);
//     li.appendChild(editBtn);

//     //append li to list
//     itemList.appendChild(li);

//     newItem.value = '';
//     newDes.value = '';
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// function filterItems(e){
//     //convert to lowercase;
//     let text = e.target.value.toLowerCase();
//     let items = itemList.getElementsByTagName('li');
    

//     Array.from(items).forEach(function(item){
//         let itemName = item.firstChild.textContent;
//         let itemDes = item.children[0].textContent;
//         // console.log(itemName);
//         // console.log(itemDes);
//         if(itemName.toLowerCase().indexOf(text) != -1 || itemDes.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block';
//         }else{
//             item.style.display = 'none';
//         }
//     });
// }

// CALL, APPLY AND BIND //
let myNum = {
	value: 20
}

let addition = function(a, b){
	return this.value + a + b;
}

console.log(addition.call(myNum, 1, 2)); // 20 + 1 + 2

let arr = [4, 5];

console.log(addition.apply(myNum, arr)); // 20 + 4 + 5

let newAdd = addition.bind(myNum);
console.log(newAdd(2, 3)); // 20 + 2 + 3

let student = {
	age: 20
}
let printAge = function(){
	return this.age;
}
let age = printAge.bind(student);
console.log(age()); // 20 


// CURRYING //

// using bind
let multiply = function(x, y) {
	console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 2 * 5

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4); // 3 * 4

// using closures
let mult = function(x){
	return function (y){
		console.log(x * y);
	}
}

let multByTwo = mult(2);
multByTwo(8);  // 2 * 8

let multByThree = mult(3);
multByThree(7); // 3 * 7 