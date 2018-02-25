import { Component } from '@angular/core';
import { CurrencyService } from './services/currency-service';
import { Observable} from 'rxjs/Rx';
import * as currencies from './helpers/currencies.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 


  constructor(private currencyService: CurrencyService) {
    }

  inputValue:number;  
  currencies:Array<string> = currencies.currencies;

  base:string ;
  symbols:string ;

  
  exchangerate:number;
  firstValue:number;
  finalValue:number; 

  getCurrentCurrency = (event) => {
    this.base = event.target.value;
  }

  getNextCurrency = (event) => {
    this.symbols = event.target.value;
  }

  convert = () => {
      this.currencyService.getCurrency(this.base,this.symbols)          
      .subscribe(
        res => {
          this.firstValue=this.inputValue;
          this.exchangerate = res.rates[this.symbols];  
          },
        err => {console.log(err);}
      )
  }  
}