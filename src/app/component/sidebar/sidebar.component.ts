import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { sidebarConfig } from '../../config'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public _sidebarConfig;
  @ViewChild('audioPlayerElem', { static: false }) audioPlayer: ElementRef;
  public isPlaying:boolean = true
  constructor() { }

  ngOnInit() {
    this._sidebarConfig = sidebarConfig;
  }
  togglePause() {
    if (this.audioPlayer.nativeElement.paused && this.audioPlayer.nativeElement.currentTime > 0 && !this.audioPlayer.nativeElement.ended) {
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.isPlaying = false;
      this.audioPlayer.nativeElement.pause();
    }
  }



}
