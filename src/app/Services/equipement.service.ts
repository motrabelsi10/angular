import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  readonly API_URL = 'http://localhost:8089/espritgather/equipement';

  constructor(private router: Router,private httpClient: HttpClient) { }
  getAllEquipement() {
    return this.httpClient.get(`${this.API_URL}/equipements`)
  }
  addEquipement(event : any) {
    return this.httpClient.post(`${this.API_URL}/add-equipement`, event)
  }
  getEquipement(idEvent : any){
    return this.httpClient.get(`${this.API_URL}/retrieve-equipement/${idEvent}`)
  }
  editEquipement(event : any){
    return this.httpClient.put(`${this.API_URL}/modify-equipement`, event)
  }
  deletEequipement(idEvent : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-equipement/${idEvent}`)
  }

}
