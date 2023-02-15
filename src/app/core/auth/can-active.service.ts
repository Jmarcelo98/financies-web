import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SnackbarProvider } from "src/app/shared/provider/snackbar.provider";
import { TokenStorageService } from "./token-storage.service";

export class AuthGuardService implements CanActivate {

    constructor(private tokenStorageService: TokenStorageService,
        private router: Router, private snackBar: SnackbarProvider) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {

        return this.isUsuarioAuthenticated();
    }

    isUsuarioAuthenticated(): boolean {


        const token = this.tokenStorageService.getToken();

        if (!token) {
            this.router.navigate(['/login'])
            this.snackBar.showSnackErro('User not logged in');
            return false;
        }

        return true;

    }


}