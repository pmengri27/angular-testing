//Here we are testing strings

import { greet } from "./greet";

describe("great", () => {
  it("should include the name in the message", () => {
    //Test should not be fragile so we will not be testing an exact string, example: "Welcome Pandi" instead we will test for the existance of the name being passed into the fucntion. We do this with the toContain function.
    expect(greet("Pandi")).toContain("Pandi");
  });
});
