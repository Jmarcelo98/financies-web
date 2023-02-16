import { MediaMatcher } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TokenStorageService } from './core/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nameApp = "Financies";
  name = "João Marcelo";

  isLogged: boolean = false
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(private tokenStorageService: TokenStorageService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  menuItems = [
    {
      label: 'Início',
      icon: 'fi-rr-home',
      // // visible: this.roles.some((r: any) => APP_ROLES_GROUP.GRUPO_SIMULACAO.includes(r)),
      visible: true,
      routerLink: '/componentes-catalog'
    },
    {
      label: 'Cadastro',
      icon: 'fi-rr-add',
      visible: true,
      items: [
        {
          label: 'Curso',
          icon: 'fi-rr-graduation-cap',
          visible: true,
          routerLink: '/user-list'
        }
      ]
    },
    {
      label: 'Inscrição',
      icon: 'fi-rr-user',
      visible: true,
      items: [
        {
          label: '• Lista de usuários',
          icon: '',
          visible: true,
          routerLink: '/user-list'
        }
      ]
    },
    {
      label: 'Contrato',
      icon: 'fi fi-rr-document-signed',
      visible: true,
      items: [
        {
          label: 'Consultar',
          icon: 'fi fi-rr-search',
          visible: true,
          routerLink: '/contrato'
        }
      ]
    },
    {
      label: 'Financeiro',
      icon: 'fi fi-rr-money-check',
      visible: true,
      items: [
        {
          label: 'Movimento Financeiro',
          icon: 'fi fi-rr-search',
          visible: true,
          routerLink: '/movimento-financeiro'
        }
      ]
    },

  ];


  ngOnInit(): void {

    this.mobileQuery.removeListener(this._mobileQueryListener);

    if (this.tokenStorageService.getToken()) {
      this.isLogged = true;
    }


  }

  public logout(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.tokenStorageService.logout();
    window.location.reload();
  }

}
