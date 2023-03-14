import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { IncomeService } from 'src/app/shared/services/income.service';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  constructor(private incomeService: IncomeService, private typeIncomeService: TypeIncomeService) { }

  formFilter = new FormGroup({
    dateReference: new FormControl(moment(), []),
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

  getAll() {
    this.incomeService.getAll(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  search () {
    
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
    this.getAll();
  }

  public displayedColumns: string[] = ['value', 'description', 'actionsColumn'];

}
