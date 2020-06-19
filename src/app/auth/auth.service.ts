import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingUpComponent } from './sing-up/sing-up.component';

interface availableUsernameResponse {
  available: boolean;
}

interface SingUpCredentials{
  username: string,
  password: string,
  passwordConfirmation: string
}

interface SingUpResponse{
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl= 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<availableUsernameResponse>(
      this.rootUrl + '/auth/username', 
      {
        username: username
      }
    )
  }

  singup( credentials: SingUpCredentials){
    return this.http.pos<SingUpResponse>(
      this.rootUrl + '/auth/singup',
      credentials
    )
  }
}
