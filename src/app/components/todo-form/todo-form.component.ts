import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoForm } from '../../shared/interfaces';

@Component({
    selector: 'app-todo-form',
    imports: [FormsModule],
    template: `
    <input type="text" [(ngModel)]="todoName" class="flex-auto" placeholder="Entrez une todo"/>
    <button (click)="addTodoInput()" class="btn btn-primary">Ajouter</button>
  `,
    styles: `
  :host{
      display: flex;
    gap: 20px;
    padding: 16px
  }
  
  input{
    border-radius: 4px;
    border: 1px solid var(--light-grey)
  }`
})
export class TodoFormComponent {
todoName="";
addTodo = output<TodoForm>();
addTodoInput(){
  if(this.todoName){
    const newTodo: TodoForm = {
      name: this.todoName,
      done: false,
    }
    this.todoName="";
    this.addTodo.emit(newTodo);

  }
}
}
