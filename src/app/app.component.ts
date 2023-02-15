import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './core/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nameApp = "Financies";
  name = "João Marcelo";

  isLogged: boolean = false

  menuItems = [
    {
      label: 'Experiências',
      icon: 'fi-rr-briefcase',
      visible: true,
      routerLink: '/experiencia'
    },
    {
      label: 'Educação',
      icon: 'fi-rr-graduation-cap',
      visible: true,
      routerLink: '/educacao'
    },
    {
      label: 'Contato',
      icon: 'fi fi-rr-comment-quote',
      visible: true,
      routerLink: '/contato'

    },

  ];

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorageService.getToken()) {
      this.isLogged = true;
    }
  }

  public logout(event: { preventDefault: () => void; }) {
    debugger
    event.preventDefault();
    // this.oauthService.logOut();
    window.location.reload();
  }

}
