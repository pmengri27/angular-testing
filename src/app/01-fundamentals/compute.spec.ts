//Karma is our test compiler (ng test)
//Jasmine is our testing framework

//describe() defines a suite (a group of related tests)
//it() defines a "spec" or "test"
//import your functions into the test

import { compute } from "./compute";

describe("compute", () => {
  it("should return 0 if input is negative", () => {
    //call the function with a negative value and store the result
    const result = compute(-1);
    //assert that the result is 0 by using the expect() function from Jasmine
    expect(result).toBe(0);
  });

  it("should increment the input if it is positive", () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
