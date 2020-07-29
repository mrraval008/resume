import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { sidebarConfig } from '../../config'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public _sidebarConfig;
  private isUserActinCaptured:boolean = false
  @ViewChild('audioPlayerElem', { static: false }) audioPlayerElem:ElementRef;
  
  public isPlaying:boolean = true;
  constructor() { }

  ngOnInit() {
    this._sidebarConfig = sidebarConfig;
  }

  captureUserAction(){
    if(!this.isUserActinCaptured){
      this.isUserActinCaptured = true;
      this.audioPlayerElem.nativeElement.play();
      this.isPlaying = true;
      return;
    }
  }

  togglePause() {
    if(!this.isUserActinCaptured){
      return;
    }
    if(this.audioPlayerElem.nativeElement.paused) {
      this.audioPlayerElem.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.isPlaying = false;
      this.audioPlayerElem.nativeElement.pause();
    }
  }
}
