import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User, Log } from 'oidc-client'; Log.logger = console; Log.level = Log.DEBUG;
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userManager = new UserManager(getUserManagerSettings());
  private user: User;
  constructor(private router: Router) {
    this.userManager.getUser()
      .then(
        user => {
          this.user = user;
        }
      );
    this.userManager.events.addSilentRenewError(error => {
      alert(error);
      this.userManager.removeUser();
      this.startLogOut();
    });
    this.userManager.events.addUserSignedOut(() => {
      alert('User logged out from op.');
      this.startLogOut();
    });
  }
  isLoggedIn(): boolean {
    this.userManager.getUser()
    .then(
      user => {
        this.user = user;
      }
    );
    return this.user != null && !this.user.expired;
  }
  getUser() {
    return this.userManager.getUser();
  }
  getUserClaims(): any {
    this.userManager.getUser()
    .then(
      user => {
        this.user = user;
      }
    );
    return this.user.profile;
  }
  getAuthorizationHeaderValue(): string {
    this.userManager.getUser()
    .then(
      user => {
        this.user = user;
      }
    );
    return `${this.user.token_type} ${this.user.access_token}`;
  }
  startAuthentication(): Promise<void> {
    return this.userManager.signinRedirect();
  }
  completeAuthentication(): Promise<void> {
    return this.userManager.signinRedirectCallback()
     .then(
       user => {
        this.user = user;
     })
     .catch(
       error => {
     });
  }
  completeSilentRenew(): any {
   this.userManager.signinSilentCallback();
  }
  startLogOut() {
    this.userManager.signoutRedirect();
  }

}


export function getUserManagerSettings(): UserManagerSettings {
  return {
    authority: environment.endPoint,
    client_id: environment.clientId,
    redirect_uri: environment.myHost + '/auth-callback',
    post_logout_redirect_uri: environment.myHost,
    response_type: 'code',
    scope: 'openid profile email scim.read.write',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: environment.myHost + '/silent-renew'
  };
}
