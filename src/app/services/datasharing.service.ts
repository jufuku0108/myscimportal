import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  private progressBarOn = new BehaviorSubject(false);
  currentProgressBarState = this.progressBarOn.asObservable();

  constructor() { }

  setProgressBarState(state: boolean) {
    this.progressBarOn.next(state);
  }
}
