import { Component, OnInit } from '@angular/core';
import { IPaginator } from 'src/app/shared/components/paginator/paginator.component';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';

@Component({
  selector: 'app-type-income-list',
  templateUrl: './type-income-list.component.html',
  styleUrls: ['./type-income-list.component.css']
})
export class TypeIncomeListComponent implements OnInit {

  constructor(private typeIncomeService: TypeIncomeService) { }

  paginator: IPaginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 1,
  }

  dataSource: any;

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.typeIncomeService.getAll(this.paginator).subscribe(res => {
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.dataSource = res.content;
    })
  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator;
    this.getAll()
  }

  public displayedColumns: string[] = ['description', 'actionsColumn'];

}
