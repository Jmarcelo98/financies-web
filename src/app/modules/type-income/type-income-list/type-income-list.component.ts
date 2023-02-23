import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddTypeItemComponent } from 'src/app/shared/components/modal-add-type-item/modal-add-type-item.component';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';

@Component({
  selector: 'app-type-income-list',
  templateUrl: './type-income-list.component.html',
  styleUrls: ['./type-income-list.component.css']
})
export class TypeIncomeListComponent implements OnInit {

  constructor(private typeIncomeService: TypeIncomeService, public dialog: MatDialog) { }

  paginator: IPaginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 10,
  }

  dataSource: any;

  ngOnInit(): void {
    console.log("teste");
    
    this.getAll()
  }

  getAll() {
    this.typeIncomeService.getAll(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  addTypeIncome() {

    const dialogRef = this.dialog.open(ModalAddTypeItemComponent, {
      width: '500px',
      data: {
        isIncome: true,
        title: 'Add income type',
        buttons: {
          primary: 'Create', // Se quiser mudar o texto do botão, basta adicionar no objeto
          secondary: 'Cancel', // Se quiser mudar o texto do botão, basta adicionar no objeto
        }
      },
    });

    // Aqui temos o retorno do click, para executar alguma ação
    // dialogRef.afterClosed().subscribe(data => {
    //     if (data.primary) {
    //         this.userService.deleteUsuario(this.userId).subscribe(ret => {
    //             this.router.navigate(['/user-list']);
    //         })
    //     }
    // });

  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator;
    this.getAll()
  }

  public displayedColumns: string[] = ['description', 'actionsColumn'];

}
