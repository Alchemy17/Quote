import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quotes/quote.model';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quotes: Quote;


  constructor() { }
  ngOnInit() {
  }

}
