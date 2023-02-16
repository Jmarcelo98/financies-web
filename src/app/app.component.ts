import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TokenStorageService } from './core/auth/token-storage.service';

interface MenuNode {
  name: string;
  link?: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Dashboard',
    link: '',
  },
  {
    name: 'Income',
    children: [
      { name: 'Incomes', link: 'income' }, { name: 'Types Income', link: 'type-income' }
    ]
  },
  {
    name: 'Expense',
    children: [
      { name: 'Expenses', link: 'expense' }, { name: 'Types Income', link: 'type-expense' }
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  link: string;
  level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nameApp = "Financies";
  name = "João Marcelo";

  isLogged: boolean = false


  constructor(private tokenStorageService: TokenStorageService) {
    this.dataSource.data = TREE_DATA;
  }

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

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

}
