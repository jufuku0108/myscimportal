import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeadernavListComponent } from './navigation/headernav-list/headernav-list.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatSelectModule, MatFormFieldModule, MatInputModule,
   MatProgressBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatExpansionModule} from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';
import { ExplorerComponent } from './explorer/explorer.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccesslogListComponent } from './accesslogs/accesslog-list/accesslog-list.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { UserLisetComponent } from './users/user-liset/user-liset.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutComponent, HeadernavListComponent, SidenavListComponent,
     ExplorerComponent, AccesslogListComponent, MyprofileComponent,
     GroupListComponent, GroupDetailsComponent, UserLisetComponent, UserDetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    PortalRoutingModule,
    GoogleChartsModule,
    HttpClientModule,
    NgxJsonViewerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
  ]
})
export class PortalModule { }
