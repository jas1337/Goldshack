import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

}
