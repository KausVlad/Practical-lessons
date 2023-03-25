'use strict';
/*
function User(name, admin) {
  this.name = name;
  this.isAdmin = admin;
}
const x11 = ['Jek', false];

// const user = new User('Ollie', true);
const user = new User(...x11);

// console.log(user);
*/

//! Object Staff NEW and PROTOTYPE

function TodoList() {
  this.todo = [];
}

TodoList.prototype.addItem = function (item) {
  this.todo.push(item);
};

TodoList.prototype.printItems = function () {
  for (const [i, el] of this.todo.entries()) {
    console.log(`Todo with INDEX: ${i} and VALUE: ${el}`);
  }
  // console.log('—————'.repeat(4));
  console.log(this);
};

TodoList.prototype.removeItem = function (index) {
  if (!this.todo[index]) {
    alert(`Todo with index ${index} does not exist`);
  } else {
    const shouldRemove = confirm(`Do you want to remove ${this.todo[index]}?`);
    if (shouldRemove) {
      this.todo.splice(index, 1);
    }
  }
};

const todoList = new TodoList();

function addItemB() {
  const item = prompt('Enter a new item to the todo list');
  todoList.addItem(item);
  todoList.printItems();
}
function removeItemB() {
  const index = prompt('Enter the index of the item you want to remove');
  todoList.removeItem(index);
  todoList.printItems();
}

// console.log(todoList);

//! .CALL
function TodoListExtended() {
  TodoList.call(this);
}

TodoListExtended.prototype = Object.create(TodoList.prototype);

TodoListExtended.prototype.addItem = function (item) {
  this.todo.push({
    item: item,
    id: Math.random(),
  });
};

TodoListExtended.prototype.print = function () {
  console.log(this.todo);
};

const todoList2 = new TodoListExtended();

function addItemB2() {
  const item = prompt('Enter a new item to the todo list');
  todoList2.addItem(item);
  todoList2.print();
}
function removeItemB2() {
  const index = prompt('Enter the index of the item you want to remove');
  todoList2.removeItem(index);
  todoList2.print();
}
