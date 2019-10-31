import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../module/User';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  username = '';
  userId = '';

  constructor(private userService: UserService) {
  }

  getUser() {
    console.log(this.userId);
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe((user: User) => {
        if (user) {
          this.username = user.name;
        }
      });
    }
  }

}
