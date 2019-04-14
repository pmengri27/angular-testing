import { EventEmitter } from "@angular/core";

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    //This would usually have an @Output() infront of it but in this section, we dont have to worry about that since we are not using templates
    this.voteChanged.emit(this.totalVotes);
  }
}
