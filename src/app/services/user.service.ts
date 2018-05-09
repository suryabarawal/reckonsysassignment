import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  loggedInUser: { username: string, role: string, isExist: boolean } = { username: '', role: '', isExist: false };
  userList = [
    {
      username: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      username: 'member',
      password: 'member',
      role: 'member'
    },
    {
      username: 'user',
      password: 'user',
      role: 'user'
    },
  ];

  constructor() { }
  checkCredentials(accountDetails): Observable<any> {
 
    this.userList.forEach(element => {
      if ((element.username === accountDetails.username) && (element.password === accountDetails.password)) {
        this.loggedInUser.username = element.username;
        this.loggedInUser.role = element.role;
        this.loggedInUser.isExist = true;

      }
    }

    );
    return Observable.of(this.loggedInUser);
  }

  getLoggedInUser(): Observable<any> {
    return Observable.of(this.loggedInUser);
  }

}
