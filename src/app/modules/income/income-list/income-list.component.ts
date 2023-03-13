import { Component, OnInit } from '@angular/core';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  constructor(private incomeService: IncomeService) { }

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
    this.incomeService.getAll(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
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
