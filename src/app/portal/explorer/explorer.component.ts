import { Component, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { DatasharingService } from 'src/app/services/datasharing.service';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  jsonData: any;
  endPoint = environment.endPoint + '/v2/users';
  constructor(private httpclientService: HttpclientService,
              private dataSharingService: DatasharingService) { }

  ngOnInit() {

    // this.startCustomMethod('Get', this.endPoint, null);
  }
  startCustomMethod(method: string, url: string, body: any) {
    // this.dataSharingService.setProgressBarState(true);

    switch (method) {
      case 'Get': {
        this.getData(url);
        break;
      }
      case 'Post': {
        this.postData(url, body);
        break;
      }
      case 'Patch': {
        this.patchData(url, body);
        break;
      }
      case 'Delete': {
        this.deleteData(url);
        break;
      }
      default: {
        break;
      }
    }
   }


  getData(endPoint: string) {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.getData(endPoint)
      .subscribe(
        response => {
          this.jsonData = response;
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          this.jsonData = errorResponse;
        }
      );

  }
  postData(endPoint: string, body: any) {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.postData(endPoint, body)
      .subscribe(
        response => {
          this.jsonData = response;
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          this.jsonData = errorResponse;
        }
      );
  }
  patchData(endPoint: string, body: any) {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.patchData(endPoint, body)
      .subscribe(
        response => {
          this.jsonData = response;
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          this.jsonData = errorResponse;
        }
      );
  }
  deleteData(endPoint: string) {
    this.dataSharingService.setProgressBarState(true);
    this.httpclientService.deleteData(endPoint)
      .subscribe(
        response => {
          this.jsonData = response;
          this.dataSharingService.setProgressBarState(false);
        },
        errorResponse => {
          this.jsonData = errorResponse;
        }
      );
  }
  getCode() {
    const codePoint = environment.endPoint + '/v2/authenticationcode';
    this.postData(codePoint, '');
  }
  getUsers() {
    const userPoint = environment.endPoint + '/v2/users';
    this.getData(userPoint);
  }
  getGroups() {
    const groupPoint = environment.endPoint + '/v2/groups';
    this.getData(groupPoint);
  }
  flushLogs() {
    const logPoint = environment.endPoint + '/v2/accesslogs';
    this.deleteData(logPoint);
  }
}
