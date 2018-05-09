import { MembersComponent } from './members/members.component';
import { UsersComponent } from './users/users.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
    { path: '', component: MembersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'reports', component: ReportingComponent },
    { path: 'users', component: UsersComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
