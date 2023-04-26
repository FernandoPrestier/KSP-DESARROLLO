import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint = environment.api.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any>{
    const path = this.endPoint + "/read.php";
    return this.http.get(path);
  }

  createUpdateEmploye(body:any, isCreate:boolean): Observable<any> {
    let path = 'API-REST/api' ;
    if (isCreate) {
      path += "/create.php"
    }else {
      path += "/update.php"
    }
    return this.http.post(path, body);
  }

  deleteUser(body: any): Observable<any> {
    let path = 'API-REST/api/delete.php';
    return this.http.post(path,body)
  }
}
