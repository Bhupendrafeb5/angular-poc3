import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(private commonService:CommonService) { }
currentTime:string
  ngOnInit(): void {
    this.currentTime=this.commonService.getCurrentTime();
    console.log(this.currentTime)
  }

}
