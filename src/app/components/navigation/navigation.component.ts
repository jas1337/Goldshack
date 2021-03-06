import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  email: string;
  password: string;
  isCollapsed: boolean;
  isAdmin: boolean;
  loginForm: NgForm;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  onClick() {
    this.isCollapsed = true;
  }

  onLoginSubmit() {

    const user = {
      email: this.email,
      password: this.password,
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 1500
        });
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 1500
        });
      }
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/']);
    return false;
  }
}
