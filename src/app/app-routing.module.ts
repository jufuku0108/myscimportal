import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './services/auth-callback/auth-callback.component';
import { SilentRenewComponent } from './services/silent-renew/silent-renew.component';


const routes: Routes = [
  {path: '', redirectTo: '/portal', pathMatch: 'full'},
  {path: 'auth-callback', component: AuthCallbackComponent},
  {path: 'silent-renew', component: SilentRenewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
