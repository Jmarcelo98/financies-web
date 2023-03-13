import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TokenStorageService } from './core/auth/token-storage.service';
import { UserService } from './shared/services/user.service';

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
      { name: 'Incomes', link: 'income', icon: './assets/images/icons/income.png' },
      { name: 'Types Income', link: 'type-income', icon: './assets/images/icons/type-income.png' }
    ]
  },
  {
    name: 'Expense',
    children: [
      { name: 'Expenses', link: 'expense', icon: './assets/images/icons/expense.png' },
      { name: 'Types Expense', link: 'type-expense', icon: './assets/images/icons/type-expense.png' }
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

  isLogged: boolean = false

  userInfo: any;

  userImage: any;

  constructor(private tokenStorageService: TokenStorageService, private router: Router,
    private userService: UserService, private sanitizer: DomSanitizer) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {

    if (this.tokenStorageService.getToken()) {
      this.isLogged = true;
      this.getUserNamePhoto();
    }

  }

  getUserNamePhoto() {
    this.userService.getNamePhoto().subscribe(res => {
      this.userInfo = res;
      this.renderImage();
    }, err => {
      console.log(err);
    })
  }

  renderImage() {

    if (this.userInfo.photo == null) {
      this.userImage = './assets/images/defaultUser.png';
    } else {
      let objectURL = 'data:image/png;base64,' + this.userInfo.photo;
      this.userImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

  public logout(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.tokenStorageService.logout();
    this.router.navigate(['login'])
      .then(() => {
        window.location.reload();
      });
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
