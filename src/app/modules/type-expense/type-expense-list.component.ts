import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { DialogTypeItemComponent } from 'src/app/shared/components/dialog-type-item/dialog-type-item.component';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { TypeExpenseService } from 'src/app/shared/services/type-expense.service';


@Component({
  selector: 'app-type-expense-list',
  templateUrl: './type-expense-list.component.html',
  styleUrls: ['./type-expense-list.component.css']
})
export class TypeExpenseListComponent implements OnInit {

  constructor(private typeExpenseService: TypeExpenseService, public dialog: MatDialog, private router: Router) { }

  paginator: IPaginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 10,
  }

  dataSource: any;


  ngOnInit(): void {
    this.getAllTypeExpenses()
  }

  getAllTypeExpenses() {
    this.typeExpenseService.getAllPageable(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  createTypeExpense() {

    this.dialog.open(DialogTypeItemComponent, {
      width: '500px',
      data: {
        objectEdit: null,
        isExpense: true,
        title: 'Add expense type',
        buttons: {
          primary: 'Create',
        }
      },
    });
    
  }

  edit(element:any) {
    this.dialog.open(DialogTypeItemComponent, {
      width: '500px',
      data: {
        objectEdit: element,
        isExpense: true,
        title: 'Edit expense type',
        buttons: {
          primary: 'Update',
          secondary: 'Cancel'
        }
      },
    });
  }

  delete(id: number){

    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: {
        title: 'Attention',
        text: 'Do you really want to delete this type of expense CARALHO?',
        buttons: {
          primary: 'Yes',
          secondary: 'No',
        }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.primary) {
        this.typeExpenseService.deleteTypeExpense(id).subscribe(ret => {
          window.location.reload();
        })
      }
    });
  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator;
    this.getAllTypeExpenses;
  }

  public displayedColumns: string[] = ['description', 'edit', 'delete'];



}
