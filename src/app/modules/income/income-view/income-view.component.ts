import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDialogConfirmComponent } from 'src/app/shared/components/form-dialog-confirm/form-dialog-confirm.component';
import { IIncome } from 'src/app/shared/interfaces/income';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-income-view',
  templateUrl: './income-view.component.html',
  styleUrls: ['./income-view.component.css']
})
export class IncomeViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private incomeService: IncomeService, private router: Router, private dialog: MatDialog) {
    this.incomeId = this.activatedRoute.snapshot.params.id;
  }

  income: IIncome;

  incomeId: 0;

  ngOnInit(): void {
    this.getById()
  }

  getById() {

    this.incomeService.getById(this.incomeId).subscribe(res => {

      this.income = res;
      
    }, err => {

      if (err.error.code == 400) {
        this.router.navigate(['/income']);
      }

    })

  }

  delete() {

    const dialogRef = this.dialog.open(FormDialogConfirmComponent, {
        width: '500px',
        data: {
            title: 'Atenção',
            text: 'Deseja relamente deletar esse registro?',
            buttons: {
                primary: 'Yes',
                secondary: 'No',
            }
        },
    });

    dialogRef.afterClosed().subscribe(data => {
        if (data.primary) {
            this.incomeService.delete(this.incomeId).subscribe(ret => {
                this.router.navigate(['/income']);
            })
        }
    });

}


}
