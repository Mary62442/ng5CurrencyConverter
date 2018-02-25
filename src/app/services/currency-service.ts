import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';

 
@Injectable()
export class CurrencyService {  
   baseURL:string="https://api.fixer.io/latest"; 
   constructor(private http:HttpClient){
   }
 
   getCurrency(base:string, symbols:string): Observable<any>{
        return this.http.get(this.baseURL+'?base='+base+'&symbols='+symbols)

   }
}