import { Component, effect, input, output } from '@angular/core';
import { TodoComponent } from "../todo/todo.component";
import { Todo } from '../../shared/interfaces';

@Component({
    selector: 'app-todos-list',
    imports: [TodoComponent],
    template: `
    <ul class="flex flex-col gap-12">
    @for(todo  of todosList(); track todo._id){
      <app-todo (selectTodo)="selectTodo.emit($event)" (deleteTodo)="deleteTodo.emit($event)" (updateTodo)="updateTodo.emit($event)" [todo]="todo"/>
    }@empty {
      <li> Il n'y a pas de todos</li>
    }
    </ul>
  `,
    styles: `
  `
})
export class TodosListComponent {
  todosList = input<Todo[]>([]);
  updateTodo = output<Todo>();
  selectTodo = output<string>();
  deleteTodo = output<string>();
}
