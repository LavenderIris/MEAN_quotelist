import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent implements OnInit {
  quote = new Quote();
  quoteslist [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.quoteslist.push(this.quote);
    this.quote = new Quote();
  }

  update() {
    this.quoteslist.sort(function(a, b) {return (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0); });
  }

}
