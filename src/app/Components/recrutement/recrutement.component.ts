import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recrutement } from 'src/app/models/recrutement';
import { RecrutementService } from 'src/app/Services/recrutement.service';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent {

  recrutements: any;
  newRecrutement: Recrutement = new Recrutement();
  creatingMode: boolean = true;

  recrutementsChunks: any[] = [];
  currentPage: number = 1;
  selectedFile!: File;
  
  constructor(private recrutementService: RecrutementService, private router: Router) {
    this.getAllRecrutements();
  }

  getAllRecrutements() {
    this.recrutementService.getAllRecrutements().subscribe(data => {
      this.recrutements = data;
      this.divideRecrutementsIntoChunks();
    });
  }

  deleteRecrutement(idRecrutement: number) {
    this.recrutementService.deleteRecrutement(idRecrutement).subscribe(() => {
      this.recrutements = this.recrutements.filter((recrutement: any) => recrutement.idRecrutement !== idRecrutement);
    });
  }


  createRecrutement() {
    const newRecrutement = {
      title: this.newRecrutement.title,
      description: this.newRecrutement.description,
      dateStart: this.newRecrutement.dateStart,
      dateFinish: this.newRecrutement.dateFinish,
      niveau: this.newRecrutement.niveau,
      
    }
    this.recrutementService.addRecrutement(this.newRecrutement).subscribe(() => {
      
      this.newRecrutement = new Recrutement();
    this.getAllRecrutements();
    });
  }


  modifyRecrutement() {
    this.recrutementService.editRecrutement(this.newRecrutement).subscribe(() => {
      
      this.getAllRecrutements();
      window.location.reload();
    });
  }

  openModel(recrutement: Recrutement = new Recrutement()) {
    if (recrutement.idRecrutement == 0) {
      this.newRecrutement = new Recrutement();
    } else {
      this.creatingMode = false;
      this.newRecrutement = recrutement;
    }
  }

  divideRecrutementsIntoChunks() {
    const chunkSize = 2;
    this.recrutementsChunks = [];
    for (let i = 0; i < this.recrutements.length; i += chunkSize) {
      this.recrutementsChunks.push(this.recrutements.slice(i, i + chunkSize));
    }
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getRecrutementsForPage(pageNumber: number): any[] {
    const recrutementsPerPage = 2;
    const startIndex = (pageNumber - 1) * recrutementsPerPage;
    const endIndex = startIndex + recrutementsPerPage;
    return this.recrutements.slice(startIndex, endIndex);
  }
  

  incrementPage() {
    if (this.currentPage < this.recrutementsChunks.length) {
      this.currentPage++;
    }
  }
  
  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  

}
