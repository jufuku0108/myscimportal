import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../user';
import { MatTableDataSource, MatSortHeader, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../../environments/environment';
import { DatasharingService } from 'src/app/services/datasharing.service';


@Component({
  selector: 'app-user-liset',
  templateUrl: './user-liset.component.html',
  styleUrls: ['./user-liset.component.css']
})
export class UserLisetComponent implements OnInit, AfterViewInit {
  public userEndpoint = environment.endPoint + '/v2/users';
  public columnsToDisplay = ['id', 'userName', 'active', 'userType', 'details'];
  public dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpclientService: HttpclientService, private router: Router, private dataSharingService: DatasharingService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getScimUsers();
  }
  getScimUsers() {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.getData(this.userEndpoint)
      .subscribe(
        response => {
          this.dataSource.data = response as User[];
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        });
  }
  redirectToDetails(id: string) {
    localStorage.setItem('userId', id);
    this.router.navigate(['/portal/users/details']);
  }
  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
