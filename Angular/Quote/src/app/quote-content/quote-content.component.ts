import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
