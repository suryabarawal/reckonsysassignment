import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  canLoad(route: Route): Observable<boolean> | boolean {
    this.userservice.getLoggedInUser().subscribe(
      userDetails => {
        if (route.data.role === userDetails.role) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }
    );
    return true;
  }
}
