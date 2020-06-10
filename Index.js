let storage = localStorage;
let container = document.querySelector('#container')
let list = document.createElement('ul');
let field = document.createElement('input');
let button = document.createElement('input');

document.body.appendChild(field);
document.body.appendChild(button);
container.appendChild(list);

field.type = 'text';
button.type = 'button';
button.value = 'Добавить';

window.onload = function(){
if(storage.getItem('tasks'))SortList(storage.getItem('tasks'));
	else storage.setItem('tasks', '');
}

button.onclick = function(){
	CreateTask();
}
document.addEventListener('keydown', function(e){
	 if(e.which==13) CreateTask();
});

function CreateTask(){
let task = field.value;
if(task === '' || task.trim() === '')
{return;}
else{
field.value = '';
storage.setItem('tasks', storage.getItem('tasks')+ `${task} `);
SortList(storage.getItem('tasks'));}
}

function SortList(save){
	list.innerHTML ='';
	let arrTask = save.split(' ');
	arrTask = arrTask.sort();
	arrTask.shift();
	for(task of arrTask){
	list.innerHTML += `<li> ${task} </li>`;
	}
}