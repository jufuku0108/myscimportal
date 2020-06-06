import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-silent-renew',
  templateUrl: './silent-renew.component.html',
  styleUrls: ['./silent-renew.component.css']
})
export class SilentRenewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeSilentRenew();
  }

}
