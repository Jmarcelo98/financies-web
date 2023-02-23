import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-income-view',
  templateUrl: './type-income-view.component.html',
  styleUrls: ['./type-income-view.component.css']
})
export class TypeIncomeViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.typeIncomeId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

  typeIncomeId: number = 0;

}
