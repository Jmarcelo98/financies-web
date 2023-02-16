import { Component, OnInit } from '@angular/core';
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

  constructor(private tokenStorageService: TokenStorageService) { }

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'fi-rr-home',
      routerLink: ''
    },
    {
      label: 'Incomes',
      icon: 'fi-rr-chat-arrow-grow',
      items: [
        {
          label: 'Income',
          icon: 'fi fi-rr-arrow-right',
          routerLink: 'income'
        }, 
        {
          label: 'Type Income',
          icon: 'fi fi-rr-arrow-right',
          routerLink: 'type-income'
        }
      ]
    },
    {
      label: 'Expenses',
      icon: 'fi-rr-chat-arrow-down',
      items: [
        {
          label: 'Expense',
          icon: 'fi fi-rr-arrow-right',
          routerLink: 'expense'
        }, 
        {
          label: 'Type Income',
          icon: 'fi fi-rr-arrow-right',
          routerLink: 'type-expense'
        }
      ]
    },


  ];


  ngOnInit(): void {

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
