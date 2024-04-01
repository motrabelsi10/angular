import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const  Base_URL = ["http://localhost:8089/espritgather/"]


@Injectable({
  providedIn: 'root'
})
export class JwtService {


  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<any> {
    return this.http.post(Base_URL + 'signup', signRequest)
  }



   }






