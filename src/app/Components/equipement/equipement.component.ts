import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipementService } from 'src/app/Services/equipement.service';
import { Equipement } from 'src/app/models/equipement';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent {
  equipement : any;
  newEquipement : Equipement = new Equipement();
  creatingMode: boolean = true;
  equipementChunks: any[] = [];
  currentPage: number = 1;
  selectedFile!: File;
  constructor(private equipementService: EquipementService, private router: Router) {
    this.getAllEquipement();
  }
    getAllEquipement() {
        this.equipementService.getAllEquipement().subscribe(data => {
          this.equipement = data;
         // this.divideEquipementsIntoChunks();
        });
    }
  
    openModel(equipement : Equipement = new Equipement()) {
      if (this.equipement.idEquipement == 0) {
        this.newEquipement = new Equipement();
      } else {
        this.creatingMode = false;
        this.newEquipement = equipement;
      }
    }
    deleteEquipement(equipementId: string) {
      this.equipementService.deletEequipement(equipementId).subscribe(() => {
        this.getAllEquipement();
        window.location.reload();
      });
    }
  
    createEquipement() {
      const newEquipement = {
        equipement: this.newEquipement.equipement,
        TypeEquip: this.newEquipement.TypeEquip,
        other: this.newEquipement.other ,
        approuvement: this.newEquipement.approuvement,
        price: this.newEquipement.price,
        event: this.newEquipement.event,
  
      }
      this.equipementService.addEquipement(this.newEquipement).subscribe(() => {
        this.getAllEquipement();
        window.location.reload();
      });
    }
  
    modifyEquipement() {
      this.equipementService.editEquipement(this.newEquipement).subscribe(() => {
        this.getAllEquipement();
        window.location.reload();
      });
    }
  
    changePage(pageNumber: number) {
      this.currentPage = pageNumber;
    }
  
    getEquipementsForPage(pageNumber: number): any[] {
      const equipementsPerPage = 2;
      const startIndex = (pageNumber - 1) * equipementsPerPage;
      const endIndex = startIndex + equipementsPerPage;
      return this.equipement.slice(startIndex, endIndex);
    }
    
  
    incrementPage() {
      if (this.currentPage < this.equipementChunks.length) {
        this.currentPage++;
      }
    }
    
    decrementPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    divideequipementsIntoChunks() {
      const chunkSize = 2;
      this.equipementChunks = [];
      for (let i = 0; i < this.equipement.length; i += chunkSize) {
        this.equipementChunks.push(this.equipement.slice(i, i + chunkSize));
    }
    }



    handleTypeChange() {
    
      if (this.newEquipement.equipement == "other" ) {
        this.newEquipement.other = "";
      }
    }
}
