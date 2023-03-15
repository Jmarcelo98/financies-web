import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { IExpense} from 'src/app/shared/interfaces/expense';
import { ExpenseService } from 'src/app/shared/services/expense.service';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private expenseService: ExpenseService,
    private router: Router, private dialog: MatDialog) {
      this.expenseId = this.activatedRoute.snapshot.params.id;
  }
  
  expense: IExpense;

  expenseId: 0;

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.expenseService.getById(this.expenseId).subscribe(res => {
      this.expense = res;
    
    }, err => {

      if (err.error.code == 400) {
        this.router.navigate(['/expense']);
      }
    })
  }

  delete() {

    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: {
          title: 'Atenção',
          text: 'Deseja realmente deletar esse registro',
          buttons: {
              primary: 'Yes',
              secondary: 'No',
          }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.primary) {
        this.expenseService.delete(this.expenseId).subscribe(ret => {
          this.router.navigate(['expense']);
        })
      }
    });
  }

}
