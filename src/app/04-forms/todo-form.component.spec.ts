// Here we are going to test that our form group has 2 form control objects (name and email). Next, we are going to test the validator for the name control, asserting that it is required.

import { FormBuilder } from "@angular/forms";
import { TodoFormComponent } from "./todo-form.component";

describe("TodoFormComponent", () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    //Here we are passing an instance of the formbuilder class. Therefore we need to import FormBuilder
    component = new TodoFormComponent(new FormBuilder());
  });

  it("should create a form with 2 controls", () => {
    //Here we are not doing Arrange Act Assert because we are only verifying the inital state of this component, we are not acting on it, so we will only be doing the Assertion part.

    //Assert
    //tobeTruthy = toBe(true)
    expect(component.form.contains("name")).toBeTruthy();
    expect(component.form.contains("email")).toBeTruthy();
  });

  it("should make the name control required", () => {
    //Assert
    let control = component.form.get("name");

    //Act
    //Set name to nothing (validator should throw an error for this)
    control.setValue("");

    //Assert
    //Assert that the validator returned false
    expect(control.valid).toBeFalsy();
  });
});
