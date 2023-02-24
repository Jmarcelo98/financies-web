import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';

@Component({
  selector: 'app-type-income-view',
  templateUrl: './type-income-view.component.html',
  styleUrls: ['./type-income-view.component.css']
})
export class TypeIncomeViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private typeIncomeService: TypeIncomeService, private route: Router) {
    this.typeIncomeId = this.activatedRoute.snapshot.params.id;
  }

  typeIncomeId: number = 0;

  ngOnInit(): void {
    this.getTypeIncomeById()
  }

  getTypeIncomeById() {
    this.typeIncomeService.getById(this.typeIncomeId).subscribe(res => {
      console.log(res);

    }, err => {
      this.route.navigate(['/type-income'])
      console.log(err);

    })
  }

}
