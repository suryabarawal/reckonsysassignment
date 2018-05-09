import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navElement = [
    { menuName: 'Members', link: 'admin' },
    { menuName: 'Products', link: 'admin/products' },
    { menuName: 'Reporting', link: 'admin/reports' },
    { menuName: 'Users', link: 'admin/users' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
