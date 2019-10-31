import {Component} from '@angular/core';
import {User} from '../../module/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  user = new User('', '');

  constructor(private userService: UserService) {
  }

  saveUser() {
    console.log('save user', this.user);
    this.userService.saveUser(this.user).subscribe((user: User) => {
      this.user = user;
    });
  }
}
