import { TodoService } from "./todo.service";

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  //in this method, we initialize the todos property by calling the server and getting the list of todo items.
  ngOnInit() {
    this.service.getTodos();
  }

  // add() {
  //   var newTodo = { title: "... " };
  //   this.service
  //     .add(newTodo)
  //     .subscribe(t => this.todos.push(t), err => (this.message = err));
  // }

  // delete(id) {
  //   if (confirm("Are you sure?")) {
  //     this.service.delete(id).subscribe();
  //   }
  // }
}
