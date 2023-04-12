import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { ExpenseService } from 'src/app/shared/services/expense.service';
import { TypeExpenseService } from 'src/app/shared/services/type-expense.service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class ExpenseListComponent implements OnInit {

  constructor(private expenseService: ExpenseService, private typeExpenseService: TypeExpenseService) { }

  formFilter = new FormGroup({
    dateReference: new FormControl(null),
    typeExpense: new FormControl(null),
    isReceived: new FormControl(null)
  });

  paginator: IPaginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 10,
  }

  dataSource: any;

  typesExpense: any;

  ngOnInit(): void {
    this.getListTypeExpense()
  }

  search() {

    if (this.formFilter.value.dateReference != null) {
      this.formFilter.controls['dateReference'].setValue(this.formFilter.value.dateReference._d);
    }

    this.expenseService.getAllByFilter(this.formFilter.getRawValue(), this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  reset() {
    this.formFilter.reset()
  }

  getListTypeExpense() {
    this.typeExpenseService.getAll().subscribe(res => {

      this.typesExpense = res;

    }, err => {
      console.log(err);

    })
  }

  create() {
  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator;
    this.search();
  }

  public displayedColumns: string[] = ['value', 'description', 'dateReference' , 'actionsColumn'];

}
