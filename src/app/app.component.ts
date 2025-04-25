import { Component } from '@angular/core';
import { TodoContainerComponent } from "./components/todo-container/todo-container.component";


@Component({
    selector: 'app-root',
    imports: [TodoContainerComponent],
    template: `<app-todo-container class="container"/>`,
    styles: ``
})
export class AppComponent {
 
}
