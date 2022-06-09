let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
//delete event;
itemList.addEventListener('click', removeItem);
//filter event;
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // get input value;
    let newItem = document.getElementById('item').value;
    // get new description;
    let newDes = document.getElementById('description').value;
    // create new li element;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value;
    let des = document.createElement('div');
    des.append(document.createTextNode(newDes));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(des);

    // create delete button;
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node to delete button;
    deleteBtn.appendChild(document.createTextNode('delete'));

    //create edit button
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right';
    editBtn.appendChild(document.createTextNode('edit'));

    //append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convert to lowercase;
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let itemDes = item.children[0].textContent;
        // console.log(itemName);
        // console.log(itemDes);
        if(itemName.toLowerCase().indexOf(text) != -1 || itemDes.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}