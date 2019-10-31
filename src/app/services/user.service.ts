import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../module/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/user/' + id);
  }

  saveUser(user: User) {
    return this.http.post('http://localhost:8080/user', user);
  }

  updateUser(user: User) {
    return this.http.put('http://localhost:8080/user', user);
  }

  deleteUser(user: User) {
    return this.http.delete('http://localhost:8080/user/' + user.id);
  }
}
