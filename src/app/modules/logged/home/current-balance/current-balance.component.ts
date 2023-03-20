import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css']
})
export class CurrentBalanceComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  dataSource: any;

  ngOnInit(): void {
    this.getCurrentBalance()
  }

  getCurrentBalance() {
    this.homeService.getCurrentBalance().subscribe( res => {

      this.dataSource = res;
      console.log(res);
      

    }, err => {
      console.log(err);
      
    })
  }

}
