import { TodoService } from "./todo.service";

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => (this.todos = t));
  }

  add() {
    //create new todo object
    var newTodo = { title: "... " };
    //call service.add
    this.service.add(newTodo).subscribe(
      //if successful then add the todo to the array in the component
      t => this.todos.push(t),
      //if not successful then throw an error and store it in the message property
      err => (this.message = err)
    );
  }
}
