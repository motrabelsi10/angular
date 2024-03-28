import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  readonly API_URL = 'http://localhost:8089/espritgather/management';

  constructor(private router: Router,private httpClient: HttpClient) { }
  getAllManagement() {
    return this.httpClient.get(`${this.API_URL}/managements`)
  }
  addManagement(event : any) {
    return this.httpClient.post(`${this.API_URL}/add-management`, event)
  }
  getManagement(idEvent : any){
    return this.httpClient.get(`${this.API_URL}/retrieve-management/${idEvent}`)
  }
  editManagement(event : any){
    return this.httpClient.put(`${this.API_URL}/modify-management`, event)
  }
  deleteManagement(idEvent : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-management/${idEvent}`)
  }
}
