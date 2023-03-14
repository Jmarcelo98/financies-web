import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { DialogTypeItemComponent } from 'src/app/shared/components/dialog-type-item/dialog-type-item.component';
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
    this.getAll()
  }

  getAll() {
    this.typeIncomeService.getAllPageable(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  create() {

    this.dialog.open(DialogTypeItemComponent, {
      width: '500px',
      data: {
        objectEdit: null,
        isIncome: true,
        title: 'Add income type',
        buttons: {
          primary: 'Create',
        }
      },
    });

  }

  edit(element: any) {
    this.dialog.open(DialogTypeItemComponent, {
      width: '500px',
      data: {
        objectEdit: element,
        isIncome: true,
        title: 'Edit income type',
        buttons: {
          primary: 'Update', // Se quiser mudar o texto do botão, basta adicionar no objeto
          secondary: 'Cancel', // Se quiser mudar o texto do botão, basta adicionar no objeto
        }
      },
    });
  }

  delete(id: number) {

    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: {
        title: 'Attention',
        text: 'Do you really want to delete this type of income?',
        buttons: {
          primary: 'Yes',
          secondary: 'No',
        }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.primary) {
        this.typeIncomeService.delete(id).subscribe(ret => {
          window.location.reload();
        })
      }
    });
  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator;
    this.getAll();
  }

  public displayedColumns: string[] = ['description', 'edit', 'delete'];

}
