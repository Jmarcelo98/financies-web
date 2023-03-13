import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITypeIncome } from 'src/app/shared/interfaces/typeIncome';
import { SnackbarProvider } from 'src/app/shared/provider/snackbar.provider';
import { IncomeService } from 'src/app/shared/services/income.service';
import { TypeIncomeService } from 'src/app/shared/services/type-income.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';

@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.css']
})
export class IncomeEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private incomeService: IncomeService, 
    private typeIncomeService: TypeIncomeService, private snackBar: SnackbarProvider) {
    this.incomeId = this.activatedRoute.snapshot.params.id;
  }

  incomeId: 0;

  typesIncome: ITypeIncome;

  formPage = new FormGroup({
    id: new FormControl(null),
    description: new FormControl(null),
    value: new FormControl(null, Validators.required),
    isReceived: new FormControl(null, Validators.required),
    typeIncome: new FormControl(null),
  },
    {
      validators: CustomValidations.checkValueGreaterThanZero
    });

  ngOnInit(): void {
    this.getById();
    this.getListTypeIncome();
  }

  getById() {

    this.incomeService.getById(this.incomeId).subscribe(res => {

      this.formPage.patchValue(res)

    })

  }

  getListTypeIncome() {
    this.typeIncomeService.getAll().subscribe(res => {

      this.typesIncome = res;

    }, err => {
      console.log(err);

    })
  }

  update() {

    if (this.formPage.valid) {

      this.incomeService.update(this.formPage.getRawValue()).subscribe( res => {
        this.snackBar.showSnackSuccess('Income successfully updated');
        setTimeout(() => {
          window.location.reload();
        }, 1200);
        
      }, err => {
        console.log(err);
      })

    } else {
      this.validaCampos(this.formPage);
    }

  }

  validaCampos(form: FormGroup) {
    const controls = Object.keys(form.controls);
    for (const control of controls) {
      form.controls[control].updateValueAndValidity();
    }
  }


}
