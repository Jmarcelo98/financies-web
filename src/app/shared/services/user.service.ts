import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) {
    super("/users");
  }

  getNamePhoto() {
    return this.http.get<any>(`${this.endPoint}` + "/name-photo")
  }

}
