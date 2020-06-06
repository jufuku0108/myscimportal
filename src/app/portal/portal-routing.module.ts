import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AccesslogListComponent } from './accesslogs/accesslog-list/accesslog-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { UserLisetComponent } from './users/user-liset/user-liset.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'portal',
   component: LayoutComponent,
   children: [
     {path: '', component: ExplorerComponent, canActivate: [AuthGuard]},
     {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
     {path: 'explorer', component: ExplorerComponent, canActivate: [AuthGuard]},
     {path: 'accesslogs', component: AccesslogListComponent, canActivate: [AuthGuard]},
     {path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard]},
     {path: 'groups', component: GroupListComponent, canActivate: [AuthGuard]},
     {path: 'groups/details', component: GroupDetailsComponent, canActivate: [AuthGuard]},
     {path: 'users', component: UserLisetComponent, canActivate: [AuthGuard]},
     {path: 'users/details', component: UserDetailsComponent, canActivate: [AuthGuard]}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
