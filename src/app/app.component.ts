import { Component } from '@angular/core';

import * as myjQuery from 'jquery'
import { ThemeserviceService } from 'src/app/themeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  public toggleThemeBar = '100%';
  constructor(private themeService:ThemeserviceService){
  }
  onThemeColorChange(event){
    if(event.target.id){
      this.themeService.setThemeColor(event.target.id)
    }
  }
  onThmeStyleChange(themeData){
    if(themeData === 'darkTheme'){
      this.themeService.setDarkTheme()
    }else{
      this.themeService.setLightTheme()
    }
  }
}
