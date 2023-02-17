import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SnackbarProvider } from '../../shared/provider/snackbar.provider';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private snackBar: SnackbarProvider) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {

                if (error.status === 401) {
                    // Implemente sua msg amigável
                    this.snackBar.showSnackErro('Incorrect email or password');

                } else if (error.status === 405) {
                    // Implemente sua msg amigável
                    this.snackBar.showSnackErro('HttpErrorInterceptor: Erro 405');
                }
                else if (error.status === 409) {
                    this.snackBar.showSnackErro(error.error.description);
                }
                return throwError(error);
            })
        );
    }
}
