import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  constructor(private authService: AuthService, private dataSharingService: DatasharingService, private router: Router) {}

  async ngOnInit() {
    await this.authService.completeAuthentication();
    const savedRoute = localStorage.getItem('savedRoute');
    this.router.navigate([savedRoute]);
  }

}
