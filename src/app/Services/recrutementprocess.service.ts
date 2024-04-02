import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecrutementprocessService {

  readonly API_URL = 'http://localhost:8089/espritgather/process';

  constructor(private router: Router,private httpClient: HttpClient) { }
    getAllProcesses() {
      return this.httpClient.get(`${this.API_URL}/retrieve-all-processes`)
    }
    
    addProcess(process : any) {

      return this.httpClient.post(`${this.API_URL}/add-process`,process)
    }
    
  
  
    getProcess(idProcessRecrutement : Number){
      return this.httpClient.get(`${this.API_URL}/retrieve-process/${idProcessRecrutement}`)
    }
    editProcess(process : any){
      return this.httpClient.put(`${this.API_URL}/modify-process`, process)
    }
    deleteProcess(idProcessRecrutement : any){
      return  this.httpClient.delete(`${this.API_URL}/remove-process/${idProcessRecrutement}`)
    }
    retrieveProcessesByRecrutement(idRecrutement: any) {
      return this.httpClient.get(`${this.API_URL}/retrieve-processes-by-recrutement/${idRecrutement}`);
    }
    addProcessByRecrutement(process: any, idRecrutement: any) {
      return this.httpClient.post(`${this.API_URL}/add-process-by-recrutement/${idRecrutement}`, process);
    }
    
   /* updateAvailablePosts(recrutementId: number, updatedPosts: number) {
      const url = `${this.API_URL}/recrutements/${recrutementId}/updatePosts`; // Exemple d'URL pour la mise à jour des postes
     
      // Envoyer une requête HTTP PUT pour mettre à jour les postes disponibles
      return this.httpClient.put(url, { updatedPosts });
    }*/
  
  }

