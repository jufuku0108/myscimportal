import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-headernav-list',
  templateUrl: './headernav-list.component.html',
  styleUrls: ['./headernav-list.component.css']
})
export class HeadernavListComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  getCurrentUser() {
    this.authService.getUser()
      .then(
        user => {
          this.user = user;
        }
      );
  }
  startLogOut() {
    this.authService.startLogOut();
  }

}
