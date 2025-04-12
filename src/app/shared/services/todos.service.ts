import { Injectable, signal, resource } from '@angular/core';
import { Todo, TodoForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
BASE_URL = "https://restapi.fr/api/zertodos"
// Probleme de version, impossible d'importer resource malgré le passage en V.18
// todoResource  = resource({
//   loader: async (): Promise<Todo[]> => (await fetch(this.BASE_URL)).json(),
// })
selectedTodoId = signal<string | null>(null);

selectedTodoResource =  resource ({
  request : this.selectedTodoId,
  loader : async ({ request }: {request : string}): Promise<Todo> => (await fetch(`${this.BASE_URL}/${request}`)).json(),
});

selectTodoId(todoId : string){
  this.selectedTodoId.set(todoId);
  console.log(this.selectedTodoId())
}
  async addTodo(todo : TodoForm){
    try {
      const response =  await (await fetch(this.BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          
        },
        body : JSON.stringify(todo)
      })).json();
       if(response.ok){
        console.log({response})
       }else {
        throw new Error('Oops');
       }
    }
    catch(e){
      throw new Error('Oops');
    };
   
  }

  constructor() { }
}
