import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/_models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userAuth: any;
  constructor(private http: HttpClient) {}


  //Sertviço que consome as informações de login do backEnd
  login() {
    this.userAuth = this.http.get<Login>(`${environment.api}/login`);
    return this.userAuth;
  }
}
