import { TodosService } from './../../shared/services/todos.service';
import { Component, computed, inject, signal } from '@angular/core';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { TodosListComponent } from "../todos-list/todos-list.component";
import { Todo, TodoForm } from '../../shared/interfaces';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoFormComponent, TodosListComponent],
  template: `
    <app-todo-form (addTodo)="addTodo($event)" class="mt-20"/>
    <app-todos-list (toggleTodo)="toggleTodo($event)" [todosList]="todoList()"/>
  `,
  styles:``
})
export class TodoContainerComponent {
  TodosService = inject(TodosService)
  todoList = computed(()=> this.TodosService.todoResource.value() || []);
addTodo(todo:TodoForm) {
  this.TodosService.addTodo(todo)
}

toggleTodo(todoId:string){
  
}
}
