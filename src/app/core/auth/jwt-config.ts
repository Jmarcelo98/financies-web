
import { JwtModuleOptions } from "@auth0/angular-jwt";
import { environment } from "src/environments/environment";
import { TokenStorageService } from "./token-storage.service";


let tokenStorage: TokenStorageService;

function tokenGetter() {
    return tokenStorage.getToken();
}


export const jwtConfig: JwtModuleOptions = {
    config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [
            `${environment.apiUrl}/login`,
            // `${environment.apiUrl}/categories`,
        ],
    },
};