import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  } from '@angular/router';
import { RecrutementprocessService } from 'src/app/services/recrutementprocess.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recrutementprocess-details-user',
  templateUrl: './recrutementprocess-details-user.component.html',
  styleUrls: ['./recrutementprocess-details-user.component.css']
})
export class RecrutementprocessDetailsUserComponent {
  
  process: any;
  processes:any;
  idProcessRecrutement: any;
  
  constructor(private processService: RecrutementprocessService, private route: ActivatedRoute, private router: Router) {
    this.idProcessRecrutement = this.route.snapshot.paramMap.get('idProcess');
    this.getProcess(this.idProcessRecrutement);
  }

  getProcess(idProcessRecrutement: any) {
    this.processService.getProcess(idProcessRecrutement).subscribe(data => {
      this.process = data;
    });
  }
  editProcess() {
    // Rediriger vers la page de modification avec l'ID du processus
    this.router.navigate(['/edit-process', this.process.idProcessRecrutement]);
  }
  loadProcesses(): void {
    this.processService.getAllProcesses().subscribe((processes: any) => {
        // Ajouter le nouvel entretien au début du tableau
        this.processes = [this.process, ...processes];
    })}
  
  deleteProcess() {
    // Demander confirmation à l'utilisateur avant de supprimer
    if (confirm('Êtes-vous sûr de vouloir supprimer ce processus ?')) {
      // Appeler le service pour supprimer le processus
      this.processService.deleteProcess(this.process.idProcessRecrutement).subscribe(() => {
        // Rediriger l'utilisateur vers une page appropriée après la suppression
        this.router.navigateByUrl('http://localhost:4200/recrutementuser')
  
      });
      
    this.router.navigate(['/recrutementuser']);
    
    }
  }
  redirectToRecrutements(): void {
    this.router.navigate(['/recrutementuser']); // Redirection vers la liste des recrutements
  }
  
  
}