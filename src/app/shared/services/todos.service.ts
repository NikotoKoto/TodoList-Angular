import { Injectable, resource } from '@angular/core';
import { Todo, TodoForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
BASE_URL = "https://restapi.fr/api/zertodos"

todoResource  = resource({
  loader: async (): Promise<Todo[]> => (await fetch(this.BASE_URL)).json(),
})
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
