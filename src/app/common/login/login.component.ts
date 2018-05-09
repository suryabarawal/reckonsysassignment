import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = false;
  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formbuilder.group({
      'username': ['', [Validators.required, Validators.maxLength(30)]],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
  }
  login() {
    this.userService.checkCredentials(this.loginForm.value)
      .subscribe(res => {
        if (res.isExist === true) {
          this.router.navigate([`/${res.role}`]);
        } else {
          this.errorMessage = true;
        }
      });
  }

}
