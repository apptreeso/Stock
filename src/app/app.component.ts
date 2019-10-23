import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // list of available stock symbols
  assignments = ['SNAP', 'MSFT', 'FB', 'C', 'AIG', 'AMZN', 'BAC', 'AAPL', 'GE'];

  // current selected symbol
  symbol = '';

  // symbols
  symbols: string[] = [];

  // retrieved stocks
  stocks = [];

  constructor(private $http: HttpClient) {
  }

  onAddStockSymbol() {
    if (this.symbols.findIndex((sym) => this.symbol === sym) === -1) {
      this.symbols.push(this.symbol);
      this.onUpdateStocks();
    }
  }

  onUpdateStocks() {

    let url = 'https://api.iextrading.com/1.0/tops/last?symbols=';
    this.symbols.forEach(symbol => url = url + symbol + ',');
    this.$http.get(url).subscribe(
      data => {
        console.log(data);
        this.stocks = Object.assign([], data);
      },
      error => console.log(error)
    );
  }
}
