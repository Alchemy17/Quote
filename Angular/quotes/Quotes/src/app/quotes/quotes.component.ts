import { Component, OnInit } from '@angular/core';
import { Quote } from './quote.model'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Anonymous', 'I was never born an idiot but I hope to never be.')
  ]
  constructor() { }

  ngOnInit() {
  }

}
