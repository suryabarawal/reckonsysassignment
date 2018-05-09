import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  allUserData: any = [];
  searchtext = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  // getData() {
  //   this.apiService.getAllData()
  //   .subscribe( data => {
  //     this.allUserData = data;
  //   })
  // }

  getData() {
    const getJsonDataUrl = 'assets/data.json';
    this.apiService.get(getJsonDataUrl)
      .subscribe(
        res => {
          this.allUserData = res.memberList;
          console.log(this.allUserData);
        },
        (err) => { }
      );
  }

}
