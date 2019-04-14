import { TodoService } from "./todo.service";

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => (this.todos = t));
  }
}

// import { TodoService } from "./todo.service";

// export class TodosComponent {
//   todos: any[] = [];
//   message;

//   constructor(private service: TodoService) {}

//   //in this method, we initialize the todos property by calling the server and getting the list of todo items.
//   ngOnInit() {
//     this.service.getTodos();
//   }
// }
