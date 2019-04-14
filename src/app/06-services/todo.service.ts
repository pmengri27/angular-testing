import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/Todo";

@Injectable()
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos?_limit=2";

  constructor(private http: HttpClient) {}

  // Get Todos
  getTodos() {
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }
}
