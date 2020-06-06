import { Component, OnInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewChecked {
  progressbarOn = false;
  progressbarMode = 'indeterminate';
  progressbarColor = 'primary';
  constructor(private dataSharingService: DatasharingService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }
  ngAfterViewChecked() {
    this.dataSharingService.currentProgressBarState
      .subscribe(
        state => {
          this.progressbarOn = state;
          this.cdRef.detectChanges();
        }
      );
  }


}
