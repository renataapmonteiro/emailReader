import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singedIn = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.signedIn$.subscribe(singedIn => {
      this.singedIn = singedIn;
    })
  }

}
