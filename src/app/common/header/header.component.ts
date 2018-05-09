import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() navElement: Array<Object>;
  loggedInUserDetails: any;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loggedInUser();
  }
  navigateToPage(route) {
      console.log(route);
      this.router.navigate([`/${route}`]);
  }
  loggedInUser() {
    this.userService.getLoggedInUser().subscribe(user => {
      console.log(user);
      this.loggedInUserDetails = user;
    });
  }
  logout() {
    this.router.navigate(['/']);
  }
}
