import { Component, OnInit } from '@angular/core';

import { experienceConfig , educationConfig , skillsBarConfig , skillsChartConfig} from '../../config'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public experienceConfig = experienceConfig;
  public educationConfig = educationConfig;
  public skillsChartConfig = skillsChartConfig;
  public skillsBarConfig = skillsBarConfig;
  constructor() {
   }

  ngOnInit() {
    // casting jquery chart to any
    (<any>$('.chart')).easyPieChart({
        barColor: '#ffff',
        trackColor: '#18191a',
        scaleColor: false,
        lineCap: 'round',
        lineWidth: 6,
        scaleLength: 4,
        size: 130,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      });
  }

}
