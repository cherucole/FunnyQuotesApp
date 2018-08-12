import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'Jerry Seinfield','If a book about failures doesn’t sell, is it a success?',new Date(2018,3,14) ),
      new Quote(2,'Lily Tomlin','I always wanted to be somebody, but now I realize I should have been more specific',new Date(2018,6,9) ),
      new Quote(3, 'Cathy Guisewite','When life gives you lemons, squirt someone in the eye',new Date(2018,1,12) ),
    

  ]

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete,index){
       if (isComplete){
           this.quotes.splice(index,1);
           }
           }

  constructor() { }
  ngOnInit() {
  }
  deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
}
