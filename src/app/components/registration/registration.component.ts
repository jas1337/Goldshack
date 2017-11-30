import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ValidateService } from '../../shared/services/validate.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  password: String;
  confirmPassword: String;
  registerForm: NgForm;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }
  onRegisterSubmit() {

    //Creates new user based on form data
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    }

    // Required Fields  
    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    // Compare Passwords  
    if (!this.validateService.comparePasswords(user)) {
      this.flashMessagesService.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail((user.email).toString())) {
      this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['/']);
      } else {
        this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
        // this.router.navigate(['/register']);
      }
    });
  }

}
