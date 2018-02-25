import { Component } from '@angular/core';
import { CurrencyService } from './services/currency-service';
import { Observable} from 'rxjs/Rx';
//import currencies from './currencies.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 


  constructor(private currencyService: CurrencyService) {
    }

  inputValue:number;  
  currencies:Array<string>;

  base:string ;
  symbols:string ;

  
  exchangerate:number;
  firstValue:number;
  finalValue:number;
 

  ngAfterViewInit() {
    fetch('./assets/helpers/currencies.json').then(response => response.json().then(res => {        
        this.currencies=res.currencies;      
      })); 

    
  } 
    
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