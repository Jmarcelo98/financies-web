import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SnackbarProvider } from "src/app/shared/provider/snackbar.provider";
import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private tokenStorageService: TokenStorageService,
        private router: Router, private snackBar: SnackbarProvider) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (!this.isUsuarioAuthenticated()) {
            this.router.navigate(['/login'])
            this.snackBar.showSnackErro('User not logged in');
            return false;
        }

        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.isUsuarioAuthenticated()) {
            this.router.navigate([''])
            return true;
        }

        return false;
    }

    isUsuarioAuthenticated(): boolean {

        const token = this.tokenStorageService.getToken();

        if (!token) {
            return false;
        }

        return true;

    }

}