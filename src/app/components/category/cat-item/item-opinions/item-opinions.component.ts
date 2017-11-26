import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-item-opinions',
  templateUrl: './item-opinions.component.html',
  styleUrls: ['./item-opinions.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemOpinionsComponent implements OnInit {

  name: string = "";
  opinionText: string = "";
  user_id: any;
  user: Object;
  opinionForm: NgForm;

  @Output() onOpinionAdded = new EventEmitter<{ name: string; opinionText: string; }>();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.name = (profile.user.firstName + ' ' + profile.user.lastName);
        this.user_id = profile.user.id;
      },
        err => {
          console.log(err);
          return false;
        });
    }
  }

  onOpinionSubmit(opinionForm: NgForm) {
    let opinion = { user_id: this.user_id, name: this.name, opinionText: this.opinionText }
    this.onOpinionAdded.emit(opinion);
  }
}
