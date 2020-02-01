import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { Accesslog } from '../accesslog';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../../environments/environment.prod';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-accesslog-list',
  templateUrl: './accesslog-list.component.html',
  styleUrls: ['./accesslog-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AccesslogListComponent implements OnInit, AfterViewInit {
  endPoint = environment.endPoint + '/v2/accesslogs';

  public columnsToDisplay = ['dateTime', 'type', 'httpMethod', 'statusCode', 'absoluteUrl'];
  public dataSource = new MatTableDataSource<Accesslog>();
  public expandedElement: Accesslog | null;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpclientService: HttpclientService, private dataSharingService: DatasharingService) { }

  ngOnInit() {
    // this.getAccessLogs();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAccessLogs();
  }
  getAccessLogs() {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.getData(this.endPoint)
      .subscribe(
        response => {
          this.dataSource.data = response as Accesslog[];
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        }
      );
  }
  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
