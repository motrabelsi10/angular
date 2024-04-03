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
  addManagement(management : any) {
    return this.httpClient.post(`${this.API_URL}/add-management`, management)
  }
  getManagement(idmanagement : any){
    return this.httpClient.get(`${this.API_URL}/retrieve-management/${idmanagement}`)
  }
  editManagement(management : any){
    return this.httpClient.put(`${this.API_URL}/modify-management`, management)
  }
  addManagementAdmin(management : any){
    return this.httpClient.put(`${this.API_URL}/add-management-admin`, management)
  }
  deleteManagement(idmanagement : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-management/${idmanagement}`)
  }
}
