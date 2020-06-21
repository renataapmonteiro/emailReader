import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/) 
      ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    
    this.authService.signin(this.authForm.value).subscribe({
      next:() => {},
      error: ({ error }) => {
        if (error.username || error.password){
          this.authForm.setErrors({credentials: true});
        }
      }
    });
  }
}
