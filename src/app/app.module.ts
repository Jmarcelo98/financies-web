import { LOCALE_ID, NgModule } from '@angular/core';
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
import { DialogTypeItemModule } from './shared/components/dialog-type-item/dialog-type-item.module';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CurrencyMaskInputMode, NgxCurrencyModule, } from 'ngx-currency';
import { MatSelectModule } from '@angular/material/select';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.fadingCircle,
  fgsColor: '#2256E1',
  pbColor: '#2256E1',
  text: 'Carregando...'
};

const ngxUiHttpLoaderConfig: NgxUiLoaderHttpConfig = {
  delay: 200, showForeground: true
};

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
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
    DialogTypeItemModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
