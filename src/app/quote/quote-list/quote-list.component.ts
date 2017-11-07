import { Component, OnInit,  Input, ViewEncapsulation,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteListComponent implements OnInit {
  @Input() myQuotes;
  @Output() voteEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(num) {
    this.myQuotes[num].votes++;
    this.voteEventEmitter.emit(this.myQuotes);
  }

  voteDown(num) {
    this.myQuotes[num].votes--;
    this.voteEventEmitter.emit(this.myQuotes);
  }

  voteDelete(num) {
    this.myQuotes.splice(num, 1);
    this.voteEventEmitter.emit(this.myQuotes);
  }
}
