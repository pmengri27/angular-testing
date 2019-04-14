//Here we are going to test the service layer
//We are going to use a fake service, so it is not actually going to make backend calls, it's just going to return a simple observable

import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    //we are going to pass null as an argument for the service to avoid importing the angular http service and complicating the test (this is ok because we are not going to use the http service anyway)
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it("should set todos property with the items returned from the server", () => {
    //We need to change the implementation of the getTodos method. To do this we use "spyOn()" this helps us put a spy on a method of a class. With that spy, we can check if that method has been called, change the implementation of that method, return a different value, or we can return an error. Basically with a spy we get control of a method in a class.

    //callFake helps us change the implementation of the method
    spyOn(service, "getTodos").and.callFake();
  });
});

// import { TestBed, inject } from "@angular/core/testing";
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from "@angular/common/http/testing";
// import { TodoService } from "./todo.service";
// import { Todo } from "../models/Todo";

// describe("TodoService", () => {
//   let service: TodoService;
//   let httpMock: HttpTestingController;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [TodoService]
//     });

//     service = TestBed.get(TodoService);
//     httpMock = TestBed.get(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it("should retrieve todos from the API via GET", () => {
//     const toDos: Todo[] = [
//       {
//         id: 1,
//         title: "delectus aut autem",
//         completed: false
//       },
//       {
//         id: 2,
//         title: "quis ut nam facilis et officia qui",
//         completed: false
//       }
//     ];

//     service.getTodos().subscribe(todos => {
//       expect(todos).toEqual(toDos);
//     });

//     const request = httpMock.expectOne(`${service.todosUrl}`);
//     expect(request.request.method).toBe("GET");
//     request.flush(toDos);
//   });
// });
