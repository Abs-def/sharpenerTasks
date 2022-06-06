let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
//delete event;
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    // get input value;
    let newItem = document.getElementById('item').value;

    // create new li element;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value;
    li.appendChild(document.createTextNode(newItem));

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