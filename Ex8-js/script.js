/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

document.getElementById("add-button").addEventListener('click', function() {
    
    // create a <li> element 
    let toDoLineItemElement = document.createElement("li");
    
    // create "delete" <button> element and add it to <li> element
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', function() {
        document.getElementById("todo-list").removeChild(
            this.parentElement
        );
    })
    toDoLineItemElement.appendChild(deleteButton);

     // create "done" <button> element and add it to <li> element
     let doneButton = document.createElement("button");
     doneButton.innerText = "Done";
     doneButton.addEventListener('click', function() {
         let todoText = this.nextElementSibling; 
         todoText.style.textDecoration = "line-through";
         todoText.style.color = "blue";
     })
     toDoLineItemElement.appendChild(doneButton  );
    

    // create a <p> element with the text entered by the user and
    // add it to the <li> element
    let todoText = document.getElementById("description").value;
    let todoParagraph = document.createElement("p");
    todoParagraph.innerHTML = todoText; 
    todoParagraph.contentEditable = true;
    
    toDoLineItemElement.appendChild(todoParagraph);

    // add the <li> element to the todo-list element
    document.getElementById("todo-list").appendChild(toDoLineItemElement);
});