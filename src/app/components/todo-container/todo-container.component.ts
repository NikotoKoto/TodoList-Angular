import { TodosService } from './../../shared/services/todos.service';
import { Component, inject, signal } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { Todo, TodoForm } from '../../shared/interfaces';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoFormComponent, TodosListComponent, JsonPipe],
  template: `
    <app-todo-form (addTodo)="addTodo($event)" class="mt-20" />
    <app-todos-list (toggleTodo)="toggleTodo($event)" 
    (selectTodo)="selectTodo($event)"
    [todosList]="todoList()" />
    <!-- <pre> {{selectTodo() | json }}</pre> -->
  `,
  styles: ``,
})
export class TodoContainerComponent {
  TodosService = inject(TodosService);
  todoList = signal<Todo[]>([]);

  //  computed(()=> this.TodosService.todoResource.value() || []);
  addTodo(todo: TodoForm) {
    this.TodosService.addTodo(todo);
  }
  async ngOnInit() {
    const list = await (await fetch('https://restapi.fr/api/zertodos')).json();
    this.todoList.set(list);
  }
  toggleTodo(todoId: string) {}
  selectTodo(todoId: string){
    this.TodosService.selectTodoId(todoId)
  }
}
