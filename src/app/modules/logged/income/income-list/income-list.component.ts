import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { IncomeService } from 'src/app/shared/services/income.service';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';


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
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class IncomeListComponent implements OnInit {

  constructor(private incomeService: IncomeService, private typeIncomeService: TypeIncomeService) { }

  formFilter = new FormGroup({
    dateReference: new FormControl(null),
    typeIncome: new FormControl(null),
    isReceived: new FormControl(null)
  });

  paginator: IPaginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 10,
  }

  dataSource: any;

  typesIncome: any;

  ngOnInit(): void {
    this.getListTypeIncome()
  }

  search() {

    if (this.formFilter.value.dateReference != null) {
      this.formFilter.controls['dateReference'].setValue(this.formFilter.value.dateReference._d);
    }

    this.incomeService.getAllByFilter(this.formFilter.getRawValue(), this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  reset() {
    this.formFilter.reset()
  }

  getListTypeIncome() {
    this.typeIncomeService.getAll().subscribe(res => {

      this.typesIncome = res;

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
