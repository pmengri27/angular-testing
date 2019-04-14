import { TodoService } from "./todo.service";

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => (this.todos = t));
  }
}
