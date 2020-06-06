import { Component, OnInit, AfterViewInit} from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../environments/environment';
import { Statistics } from './statistics';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  pipe = new DatePipe('en-US');
  statistics: Statistics;
  endPoint = environment.endPoint + '/v2/statistics';
  googleChartTitle = 'Access Logs';
  googleChartType = 'AreaChart';
  googleChartColumnNames = ['City', 'Access'];
  googleChartData = [];

  constructor(private httpclientService: HttpclientService) {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.getManageData();
  }
  getManageData() {
    this.httpclientService.getData(this.endPoint)
      .subscribe(
        response => {
          this.statistics = response as Statistics;
          this.statistics.accessLogs.forEach(element => {
            const input = [this.pipe.transform(element.date, 'MM/dd'), element.count];
            this.googleChartData.push(input);
          });
        },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        });
  }
}
