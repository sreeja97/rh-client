import { Component, OnInit } from '@angular/core';
import { RestService, Video } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
 })
export class VideoComponent implements OnInit {

  videos: Video[] = [];

  constructor(
    public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.rest.getVideos().subscribe((resp: any) => {
      this.videos = resp;
      console.log(this.videos);
    });
  }

}