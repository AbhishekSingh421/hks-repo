import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  api: string = 'https://api.publicapis.org/entries'
  dataList = []
  constructor(
    public http: HttpClient
  ) {  }

  ngOnInit(): void {
  }


}
