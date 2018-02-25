import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency-service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, CurrencyConverterPipe
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
