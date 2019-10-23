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

