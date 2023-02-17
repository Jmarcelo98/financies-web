import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginator } from '../components/paginator/paginator.component';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class TypeIncomeService extends BaseService {

  constructor(private http: HttpClient) {
    super("/types-income");
  }

  getAll(page: IPaginator): Observable<any> {

    var params = this.setPageToHttpParam(page)

    return this.http.get<any>(`${this.endPoint}`, { params: params }).pipe(
      map((response) => {
        return (response);
      })
    )
  }

}
