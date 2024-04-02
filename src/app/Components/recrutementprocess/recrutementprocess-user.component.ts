import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RecrutementComponent } from '../recrutement/recrutement.component';
import { RecrutementProcess } from 'src/app/models/recrutement-process';
import { RecrutementprocessService } from 'src/app/Services/recrutementprocess.service';

import { RecrutementService } from 'src/app/Services/recrutement.service';
import { Recrutement } from 'src/app/models/recrutement';
@Component({
  selector: 'app-recrutementprocess-user',
  templateUrl: './recrutementprocess-user.component.html',
  styleUrls: ['./recrutementprocess-user.component.css']
})
export class RecrutementprocessUserComponent implements OnInit {
  processes: any[] = [];
  showRecrutementForm: boolean = false;
  newRecrutementProcess: any = {};
  otherClubsList: string[] = ['Club 1', 'Club 2', 'Club 3'];
  selectedClubs: any = {};
  creatingMode: boolean = true;
  idRecrutement :any;
  recrutement! : Recrutement;

 
  constructor(private router: Router,private route: ActivatedRoute,private recrutementservice: RecrutementService,private RecrutementProcess :RecrutementprocessService) { 
  }
  


  loadProcesses(): void {
    this.RecrutementProcess.getAllProcesses().subscribe((processes: any) => {
        // Ajouter le nouvel entretien au début du tableau
        this.processes = [this.newRecrutementProcess, ...processes];
    });
}

ngOnInit(): void {
  this.idRecrutement = this.route.snapshot.paramMap.get('idRecrutement');
  if (this.idRecrutement !== null) {
    this.retrieveProcessesByRecrutement(this.idRecrutement);
  }
}

retrieveProcessesByRecrutement(idRecrutement: number): void {
  this.RecrutementProcess.retrieveProcessesByRecrutement(idRecrutement).subscribe(
    (response: any) => {
      this.processes = response;
    },
    (error: any) => {
      console.error('Error fetching request by recrutement:', error);
    }
  );
}

  modifyProcess(modifiedProcess: RecrutementProcess): void {
    this.RecrutementProcess.editProcess(modifiedProcess).subscribe(() => {
      this.loadProcesses(); // Recharger la liste après la modification
    });
  }

  deleteProcess(idProcessRecrutement: number): void {
    this.RecrutementProcess.deleteProcess(idProcessRecrutement).subscribe(() => {
      this.loadProcesses(); // Recharger la liste après la suppression
    });
  }
  
 
  openModel(process: RecrutementProcess = new RecrutementProcess()) {
    if (process.idProcessRecrutement == 0) {
      this.newRecrutementProcess = new RecrutementProcess();
    } else {
      this.creatingMode = false;
      this.newRecrutementProcess = process;
    }
  }
  createProcessbyRecrutement(): void {
    // Récupérer les détails du recrutement
    this.recrutementservice.getRecrutement(this.idRecrutement).subscribe({
      next: (recrutement: any) => {
        // Créer un nouvel objet de processus de recrutement
        const newRecrutementProcess = {
          availability: this.newRecrutementProcess.availability,
          interviewDate: this.newRecrutementProcess.interviewDate,
          integratedInOtherClubs: this.newRecrutementProcess.integratedInOtherClubs,
          skills:this.newRecrutementProcess.skills,
          whyToJoin: this.newRecrutementProcess.whyToJoin,
          otherClubs:this.newRecrutementProcess.otherClubs,
        };
        
        // Ajouter le processus de recrutement en utilisant le service approprié
        this.RecrutementProcess.addProcessByRecrutement(newRecrutementProcess, this.idRecrutement).subscribe({
          next: () => { 
            // Réinitialiser les données du formulaire après l'ajout
            this.newRecrutementProcess = new RecrutementProcess();
            // Recharger la liste des processus après l'ajout
            this.loadProcesses(); 
            // Masquer le formulaire après l'ajout
            this.showRecrutementForm = false; 
          },
          error: (error) => {
            console.error('Erreur lors de l\'ajout du processus de recrutement :', error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des détails du recrutement :', error);
      }
    });
  }

  /*createProcessbyRecrutement(): void {
    // Récupérer les détails du recrutement
    this.recrutementservice.getRecrutement(this.idRecrutement).subscribe((recrutement: any) => {
        // Créer un nouvel objet de processus de recrutement
        const newRecrutementProcess = {

                interviewDate: new Date(),

        };

        // Ajouter le processus de recrutement en utilisant le service approprié
        this.RecrutementProcess.addProcessByRecrutement(newRecrutementProcess, this.idRecrutement).subscribe(() => {
                // Recharger la liste des processus après l'ajout
                this.loadProcesses();
        // Masquer le formulaire après l'ajout
        this.showRecrutementForm = false;
        // Réinitialiser les données du formulaire
        this.newRecrutementProcess={};
          });
    })
}/*

  

 /* updateAvailablePosts(recrutementId: number, updatedPosts: number): void {
    this.RecrutementProcess.updateAvailablePosts(recrutementId, updatedPosts).subscribe({
      next: () => {
        console.log('Nombre de postes mis à jour avec succès.');
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour des postes disponibles :', error);
      }
    });
  }*/

  /*
 createProcess(newProcess: RecrutementProcess): void {
    this.RecrutementProcess.addProcess(newProcess).subscribe(() => {
        this.loadProcesses(); // Recharger la liste après l'ajout
        this.showRecrutementForm = false; // Masquer le formulaire après l'ajout
        this.newRecrutementProcess = {}; // Réinitialiser le nouvel objet de processus
    });
}
*/
/* constructor(private router: Router,private route: ActivatedRoute,private RecrutementProcess: RecrutementprocessService) { 
  }
  */
 /*  ngOnInit(): void {
    this.loadProcesses();
  }
*/
  }