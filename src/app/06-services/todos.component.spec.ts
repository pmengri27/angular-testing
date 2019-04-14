//Here we are going to test the service layer
//We are going to use a fake service, so it is not actually going to make backend calls, it's just going to return a simple observable

import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable, pipe, from, of, empty, throwError } from "rxjs";

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

    //Arrange
    let todos = [1, 2, 3];

    //callFake helps us change the implementation of the method
    spyOn(service, "getTodos").and.callFake(() => {
      //this is simulating a return of todo items from the service
      return from([todos]);
    });

    //Act
    component.ngOnInit();

    //Assert
    expect(component.todos).toBe(todos);
  });

  it("should call the server to save the changes when a new todo item is added", () => {
    //Arrange
    let spy = spyOn(service, "add").and.callFake(t => {
      return empty();
    });

    //Act
    component.add();

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  it("should add the new todo returned from the server", () => {
    //Arrange
    let todo = { id: 1 };
    let spy = spyOn(service, "add").and.returnValue(from([todo]));

    //Act
    component.add();

    //Assert
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it("should set the message property if server returns an error when adding a new todo ", () => {
    //Arrange
    let error = "error from the server";
    let spy = spyOn(service, "add").and.returnValue(throwError(error));

    //Act
    component.add();

    //Assert
    expect(component.message).toBe(error);
  });
});
