import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-last-transaction',
  templateUrl: './last-transaction.component.html',
  styleUrls: ['./last-transaction.component.css']
})
export class LastTransactionComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  dataSource: any;

  ngOnInit(): void {
    this.getLastTransactions();
  }

  getLastTransactions() {
    this.homeService.getLastTransactions().subscribe( res => {

      this.dataSource = res;

    }, err => {
      console.log(err);
      
    })
  }

  public displayedColumns: string[] = ['value', 'description', 'typeTransaction', 'dateReference'];

}
