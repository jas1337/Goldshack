import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  //Checks if form is properly fulfilled 
  validateRegister(user: any) {
    if (user.firstName == undefined || user.lastName == undefined || user.email == undefined
      || user.password == undefined || user.confirmPassword == undefined) {
      return false;
    } else {
      return true;
    }
  }

  //Checks if given email is valid
  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //Checks if passwords match
  comparePasswords(user: any) {
    if (user.password !== user.confirmPassword) {
      return false;
    } else {
      return true;
    }
  }
}
