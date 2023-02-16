import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TokenStorageService } from './core/auth/token-storage.service';

interface MenuNode {
  name: string;
  link?: string;
  icon?: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Dashboard',
    link: '',
    icon: './assets/images/icons/home.png'
  },
  {
    name: 'Income',
    children: [
      { name: 'Incomes', link: 'income', icon: './assets/images/icons/income.png' }, { name: 'Types Income', link: 'type-income' }
    ]
  },
  {
    name: 'Expense',
    children: [
      { name: 'Expenses', link: 'expense',  icon: './assets/images/icons/expense.png'  }, { name: 'Types Income', link: 'type-expense' }
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  link: string;
  icon: string;
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
      icon: node.icon,
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
