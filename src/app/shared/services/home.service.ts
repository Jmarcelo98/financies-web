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
export class HomeService extends BaseService {

  constructor(private http: HttpClient) {
    super("/homes");
  }

  getCurrentBalance() {
    return this.http.get<any>(`${this.endPoint}/current-balance`).pipe(
      map((response) => {
        return (response);
      })
    )
  }


}
