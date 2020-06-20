import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable()

export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
            req: HttpRequest<any>, 
            next:HttpHandler
        ): Observable<HttpEvent<any>>{

            const modifiedReq = req.clone({
                withCredentials: true
            })

        return next.handle(modifiedReq).pipe(
            filter( val => val.type === HttpEventType.Sent),

                tap(val => {
                    if( val.type === HttpEventType.Sent){
                        console.log(val);
                    }

                    if( val.type === HttpEventType.Response){
                        console.log(val);
                    }
                })
            )
    };
}
