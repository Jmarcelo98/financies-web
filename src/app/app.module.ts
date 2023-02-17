import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtConfig } from './core/auth/jwt-config';
import { HttpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { SnackbarComponentModule } from './shared/components/snackbar/snackbar.component.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxUiLoaderConfig, NgxUiLoaderHttpConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, SPINNER } from 'ngx-ui-loader';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.fadingCircle,
  fgsColor: '#2256E1',
  pbColor: '#2256E1',
  text: 'Carregando...'
};

const ngxUiHttpLoaderConfig: NgxUiLoaderHttpConfig = {
  delay: 200, showForeground: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    SnackbarComponentModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot(ngxUiHttpLoaderConfig),
    JwtModule.forRoot(jwtConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
