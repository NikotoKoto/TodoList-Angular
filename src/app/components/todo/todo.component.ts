import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
     <li class="flex border">
        <p class="flex-auto gap-12 px-12">{{todo()?.name}}</p>
        <input type="checkbox" class="border mx-10" [checked]='todo()?.done'/>
      </li>
  `,
  host:{
    '(click)': 'toggleTodo.emit(todo()._id)'
  },
  styles: `
  :host{
    padding: 0 16px 0 16px;
  }`
})
export class TodoComponent {
  todo = input<Todo>();
  
  toggleTodo = output<string>()
}
