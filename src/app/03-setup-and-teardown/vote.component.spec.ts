//Here we're going to talk about "Arrange, Act, and Assert" and the "beforeEach" function.

// Each test should run in isolation. The result of one test should not impact the result of another. If you simply declare  VoteComponent in the class level and use it in both tests, then the results of test1 will impact test2! This is why we use the beforeEach function! Our test runner (Karma) will run the beforeEach function before each test, thereby giving our VoteComponent a clean start for each test.

//Note: Jasmine has 3 other functions that are similar to beforeEach.
// 1) afterEach (where we do clean up)
// 2) beforeAll (which is executed once before all tests)
// 3) afterAll (which is executed once after all tests)

import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
  //Here is "Arrange" where we are creating an instance of a component
  let component: VoteComponent;

  //Here we are using the beforeEach function to initialize our VoteComponent
  beforeEach(() => {
    component = new VoteComponent();
  });

  it("should increment totalVotes when upvoted", () => {
    //Here is "Act" where we are calling a function
    component.upVote();

    //Here is "Assert" where we assert the result to be true
    expect(component.totalVotes).toBe(1);
  });

  //Note: the result of the test above can impact the result of the test below. Each test should run in an isolated world.

  it("should decrement totalVotes when downvoted", () => {
    //Act
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});
