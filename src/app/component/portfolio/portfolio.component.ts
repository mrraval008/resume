import { Component, OnInit } from '@angular/core';
import  {portfolioConfig} from '../../config';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolioConfig = portfolioConfig;
  public filterText = 'allproject'
  constructor() { }

  ngOnInit() {
  }

}
