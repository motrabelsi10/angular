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
  addEquipement(equipement : any) {
    return this.httpClient.post(`${this.API_URL}/add-equipement`, equipement)
  }
  getEquipement(idequipement : any){
    return this.httpClient.get(`${this.API_URL}/retrieve-equipement/${idequipement}`)
  }
  editEquipement(equipement : any){
    return this.httpClient.put(`${this.API_URL}/modify-equipement`, equipement)
  }
  addEquipementAdmin(equipement : any){
    return this.httpClient.put(`${this.API_URL}/add-equipement-admin`, equipement)
  }
  deletEequipement(idequipement : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-equipement/${idequipement}`)
  }

}
