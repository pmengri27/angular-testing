//Here we are going to test a component that uses an EventEmitter

import { VoteComponent } from "./vote.component";
import { componentFactoryName } from "@angular/compiler";

describe("VoteComponent", () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it("should raise voteChanged event when upvoted", () => {
    //Arrange
    let totalVotes = null;
    //Note: EventEmitters are observables, so we can subscribe to them
    //We can set tv to what we get from the event
    component.voteChanged.subscribe(tv => (totalVotes = tv));

    //Act
    component.upVote();

    //Assert
    expect(totalVotes).toBe(1);
  });
});
