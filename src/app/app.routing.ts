import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, CanLoad } from '@angular/router';
@NgModule ({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '', component: LoginComponent},
            { path: 'member', loadChildren: 'app/member/member.module#MemberModule', canLoad: [AuthGuardService], data: { role: 'member'}},
            { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuardService], data: { role: 'admin'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
