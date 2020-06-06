import { MatTableDataSource, MatSortHeader, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Group } from '../group';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit, AfterViewInit {
  public groupEndpoint = environment.endPoint + '/v2/groups';
  public columnsToDisplay = ['id', 'displayName', 'details'];
  public dataSource = new MatTableDataSource<Group>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpclientService: HttpclientService, private router: Router, private dataSharingService: DatasharingService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.getScimGroups();
  }
  getScimGroups() {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.getData(this.groupEndpoint)
      .subscribe(
        response => {
          this.dataSource.data = response as Group[];
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        }
      );
  }
  redirectToDetails(id: string) {
    localStorage.setItem('groupId', id);
    this.router.navigate(['/portal/groups/details']);
  }
}
