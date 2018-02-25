import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({
    name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
    transform(value: number, exchangerate: number) {
        if(value && !isNaN(value)) {
            let newRate = value*exchangerate;
            return newRate;
        }
        return;
    }
}