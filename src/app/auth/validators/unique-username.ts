
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: "root",
})

export class UniqueUsername implements AsyncValidator {
    constructor(private http: HttpClient){}

    validate = (control: FormControl) => {
        const {value} = control;
        // console.log(value);

        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        })
        .pipe(
            map(value => {
               if(value.avaible){
                   return null;
               }
                
            }),
            catchError((err) => {
                // console.log(err);
                if(err.error.username){
                 return of({ nonUniqueUsername: true});   
                } else {
                    return of({ nonConecction: true });
                }      
            })
        )
    }
}
