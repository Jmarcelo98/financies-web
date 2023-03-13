import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginator } from '../components/paginator/paginator.component';
import { BaseService } from './base-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeExpenseService extends BaseService {

  constructor(private http: HttpClient) {
    super("/type-expenses");
   }

   getAllTypeExpenses(page: IPaginator): Observable<any> {

    var params = this.setPageToHttpParam(page)

    return this.http.get<any>(`${this.endPoint}`, {params: params}).pipe(
      map((response) => {
        return (response);
      })
    )
   }

   getById(id: number): Observable<any> {
    
    return this.http.get<any>(`${this.endPoint}/${id}`).pipe(
      map((response) =>{
        return (response);
      })
    )
  }
  
  createTypeExpense(form: any) {
    return this.http.post(`${this.endPoint}`, form, httpOptions);
  }

  updateTypeExpense(form: any){
    return this.http.patch(`${this.endPoint}`, form, httpOptions);
  }

  deleteTypeExpense(id: number): Observable<any> {
    return this.http.delete(`${this.endPoint}/${id}`);
  }
}
