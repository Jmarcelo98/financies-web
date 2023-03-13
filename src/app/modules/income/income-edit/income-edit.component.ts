import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITypeIncome } from 'src/app/shared/interfaces/typeIncome';
import { IncomeService } from 'src/app/shared/services/income.service';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';

@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.css']
})
export class IncomeEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private incomeService: IncomeService, private typeIncomeService: TypeIncomeService) {
    this.incomeId = this.activatedRoute.snapshot.params.id;
  }

  incomeId: 0;

  typesIncome: ITypeIncome;

  selected: 'null';

  formPage = new FormGroup({
    id: new FormControl(null),
    description: new FormControl(null),
    value: new FormControl(null, Validators.required),
    isReceived: new FormControl(null, Validators.required),
    typeIncome: new FormControl(null),
  });

  ngOnInit(): void {
    this.getById();
    this.getListTypeIncome();

  }

  getById() {

    this.incomeService.getById(this.incomeId).subscribe(res => {

      this.formPage.patchValue(res)
      console.log(this.formPage.getRawValue());
      
      // this.selected = this.formPage.value.typeIncome
      // console.log(this.selected);
      
      // this.income = res;

    })

  }

  getListTypeIncome() {
    this.typeIncomeService.getAll().subscribe(res => {

      this.typesIncome = res
      

    }, err => {
      console.log(err);

    })
  }

  edit() {
    console.log(this.formPage.getRawValue());
    
  }

}
