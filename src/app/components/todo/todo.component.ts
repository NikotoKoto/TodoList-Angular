import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf],
  template: `
     <li class="flex border" *ngIf="todo() as t"
     >
     <!-- *ngIf - S'assurer que si c'est undefined on affiche rien de cette todo -->
        <p (click)="selectTodo.emit(t._id)" class="flex-auto gap-12 px-12">{{todo()?.name}}</p>
        <input (click)="toggleTodo.emit(t._id)" type="checkbox" class="border mx-10" [checked]='todo()?.done'/>
      </li>
  `,
  host:{
    
  },
  styles: `
  :host{
    padding: 0 16px 0 16px;
  }`
})
export class TodoComponent {
  todo = input<Todo>();
  selectTodo = output<string>();
  toggleTodo = output<string>()
}
