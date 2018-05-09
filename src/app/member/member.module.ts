import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UsersComponent } from './users/users.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, ProductsComponent, ReportingComponent, UsersComponent, MembersComponent]
})
export class MemberModule { }
