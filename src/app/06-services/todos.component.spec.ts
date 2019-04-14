import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TodoService } from "./todo.service";
import { Todo } from "../models/Todo";

describe("TodoService", () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });

    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should retrieve todos from the API via GET", () => {
    const toDos: Todo[] = [
      {
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      }
    ];

    service.getTodos().subscribe(todos => {
      expect(todos).toEqual(toDos);
    });

    const request = httpMock.expectOne(`${service.todosUrl}`);
    expect(request.request.method).toBe("GET");
    request.flush(toDos);
  });
});
