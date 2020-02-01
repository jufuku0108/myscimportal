import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../../environments/environment.prod';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userId: string;
  public user: User;
  public userEndpoint = environment.endPoint + '/v2/users';

  constructor(private httpcientService: HttpclientService,
              private activatedRoute: ActivatedRoute, private dataSharingService: DatasharingService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.getScimUser(this.userId);
    localStorage.removeItem('userId');
  }
  getScimUser(id: string) {
    this.dataSharingService.setProgressBarState(true);
    const endPoint = this.userEndpoint + `/${id}`;
    this.httpcientService.getData(endPoint)
      .subscribe(
        response => {
          this.user = response as User;
          this.dataSharingService.setProgressBarState(false);
         },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        });
  }
}
