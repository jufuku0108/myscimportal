import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from './portal/portal.module';
import { AuthCallbackComponent } from './services/auth-callback/auth-callback.component';
import { SilentRenewComponent } from './services/silent-renew/silent-renew.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    SilentRenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
