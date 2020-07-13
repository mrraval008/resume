import { Component, OnInit } from '@angular/core';

import { interstConfig } from '../../config'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public _interstConfig;
  constructor() { }

  ngOnInit() {
    this._interstConfig = interstConfig;
  }
  downloadCV(){
    window.open(
      'https://mybookproject.s3.ap-south-1.amazonaws.com/Milan_Raval_Resume.docx',
      '_blank' // <- This is what makes it open in a new window.
    );
  }

}
