import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';

import {BehaviorSubject, Observable} from 'rxjs';
import { CommonService } from '../common.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource(this.commonService);
  ngOnInit(): void {
  }

}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  constructor(private commonService:CommonService) {
    super()
   }
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(this.commonService.ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
