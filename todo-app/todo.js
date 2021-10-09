//Jquery start

//Mark todo as completed

/* $("ul").on('click', 'li', function(){
    $(this).toggleClass('completed')
  })

//Remove todo
$('ul').on('click', 'span', function(event){
  $(this).parent().remove();
});
*/

//Enter new todo

document.getElementById('submit').addEventListener('click', enterTodo)
function enterTodo(e){
    let todoItem = document.getElementById('enter-todo').value
    document.querySelector('ul').innerHTML =
    `${document.querySelector('ul').innerHTML}
    <li>
      ${todoItem} <span class="remove-todo"><i class="far fa-trash-alt"></i></span>          
    </li>`

    addEventListenersToRemoveTodos()
  }

//Jquery end

//Modern Js start

//Mark todo as completed

//Remove todo
function addEventListenersToRemoveTodos() {
  document.querySelectorAll('.remove-todo').forEach(function(selected){
    selected.addEventListener('click', function(e){
      console.log(e.target.parentNode)
      if (e.target.parentNode.tagName === 'LI') {
        e.target.parentNode.remove()
      } else if (e.target.parentNode.parentNode.tagName === 'LI') {
        e.target.parentNode.parentNode.remove()
      }
     })
  })
}
addEventListenersToRemoveTodos()

//Enter New todo
// document.querySelector('#enter-todo').addEventListener('keypress', function(e) {
//   if (e.which === 13){
//     let todoItem = e.target.value
    // let li = document.createElement('li');
    // let text = document.createTextNode(todoItem);
    // let span = document.createElement('span');
    // let i = document.createElement('i');
    // let newTodo = `${todoItem}<span class="remove-todo"><i class="far fa-trash-alt"></i></span>`
    // let todoList = document.querySelector('#todo-list')
    // todoList.innerHTML = `${todoList.innerHTML}${newTodo}`
    // let li = document.createElement('li').innerHTML = newTodo
//   document.querySelector('#todo-list').append(newTodo)
//   } else {
//     return 'Cant'
//   }
  
// })


