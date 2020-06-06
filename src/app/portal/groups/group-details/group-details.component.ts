import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { ActivatedRoute } from '@angular/router';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { environment } from '../../../../environments/environment';
import { DatasharingService } from 'src/app/services/datasharing.service';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  public groupEndpoint = environment.endPoint + '/v2/groups';
  public group: Group;
  constructor(private httpclientService: HttpclientService,
              private activatedRoute: ActivatedRoute, private dataSharingService: DatasharingService) { }

  ngOnInit() {
    const id = localStorage.getItem('groupId');
    this.getScimGroupById(id);
  }
  getScimGroupById(id: string) {
    this.dataSharingService.setProgressBarState(true);
    const endPoint = this.groupEndpoint + `/${id}`;
    this.httpclientService.getData(endPoint)
      .subscribe(
        response => {
          this.group = response as Group;
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          alert(JSON.parse(errorResponse));
        }
      );
  }

}
