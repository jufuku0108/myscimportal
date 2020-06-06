import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'oidc-client';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: User;
  manageUrl: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.manageUrl = environment.endPoint + environment.accountManagePage;
    this.getMyProfile();
  }
  getMyProfile() {
    this.authService.getUser()
      .then(
        user => {
          this.user = user;
        }
      );
  }
}
