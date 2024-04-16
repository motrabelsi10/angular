import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RecrutementComponent } from '../recrutement/recrutement.component';
import { RecrutementProcess, Skill, SkillLevel } from 'src/app/models/recrutement-process';
import { RecrutementprocessService } from 'src/app/Services/recrutementprocess.service';
import { NgForm } from '@angular/forms';
import { RecrutementService } from 'src/app/Services/recrutement.service';
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
  
  skillValues = Object.values(Skill);
  skillLevelValues = Object.values(SkillLevel);
  addedSkills: { skill: Skill; level: SkillLevel }[] = [];
 
  constructor(private router: Router,private route: ActivatedRoute,private recrutementservice: RecrutementService,private RecrutementProcess :RecrutementprocessService) { 
  }
  

ngOnInit(): void {
  this.idRecrutement = this.route.snapshot.paramMap.get('idRecrutement');
  if (this.idRecrutement !== null) {
    this.retrieveProcessesByRecrutement(this.idRecrutement);
  }
}

retrieveProcessesByRecrutement(idRecrutement: number): void {
  this.RecrutementProcess.retrieveProcessesByRecrutement(idRecrutement)
    .subscribe({
      next: (response: any) => {
        this.processes = response;
      },
      error: (error: any) => {
        console.error('Error fetching processes by recruitment:', error);
        // Optional: Implement additional error handling (e.g., display message)
      },
      complete: () => {
        // Optional: Handle completion (e.g., loading indicator)
      },
    });
}

  modifyProcess(modifiedProcess: RecrutementProcess): void {
    this.RecrutementProcess.editProcess(modifiedProcess).subscribe(() => {
      this.retrieveProcessesByRecrutement(this.idRecrutement); // Recharger la liste après la modification
    });
  }

  deleteProcess(idProcessRecrutement: number): void {
    this.RecrutementProcess.deleteProcess(idProcessRecrutement).subscribe(() => {
      this.retrieveProcessesByRecrutement(this.idRecrutement); // Recharger la liste après la modification
    });
  }
  loadProcesses(idRecrutement:number): void {
    this.RecrutementProcess.retrieveProcessesByRecrutement(idRecrutement).subscribe((processes: any) => {
        // Ajouter le nouvel entretien au début du tableau
        this.processes = [this.newRecrutementProcess, ...processes];
    });
}
 
  openModel(process: RecrutementProcess = new RecrutementProcess()) {
    if (process.idProcessRecrutement == 0) {
      this.newRecrutementProcess = new RecrutementProcess();
      
      this.loadProcesses(this.idRecrutement);
    } else {
      this.creatingMode = false;
      this.newRecrutementProcess = process;
      
    }
  }
  
  createProcessbyRecrutement(): void {
    const newRecrutementProcess = {
        approved: this.newRecrutementProcess.approved,
        interviewDate: this.newRecrutementProcess.interviewDate,
        whyToJoin: this.newRecrutementProcess.whyToJoin,
        otherClubs: this.newRecrutementProcess.otherClubs,
        integratedInOtherClubs: this.newRecrutementProcess.integratedInOtherClubs,
        availability: this.newRecrutementProcess.availability,
        Skills: this.newRecrutementProcess.Skills || new Map<Skill, SkillLevel>(),
    };
    this.addedSkills.forEach(skill => {
      newRecrutementProcess.Skills.set(skill.skill, skill.level);
    });

    this.RecrutementProcess.addProcessByRecrutement(newRecrutementProcess, this.idRecrutement).subscribe(() => {
      
        this.loadProcesses(this.idRecrutement);
        
        this.newRecrutementProcess = {};
        this.addedSkills =[]; // Réinitialiser les valeurs du formulaire après la création réussie
        this.showRecrutementForm = false;
        
        this.retrieveProcessesByRecrutement(this.idRecrutement);
    });
}


 
addSkill() {
  console.log("Adding new skill...");
  this.addedSkills.push({ skill: Skill.WRITTEN_COMMUNICATION, level: SkillLevel.NONE });
  
  
}
  
removeSkill(index: number) {
  this.addedSkills.splice(index, 1);
}

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
 
  
  }