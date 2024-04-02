import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from 'src/app/Services/management.service';
import { Management } from 'src/app/models/management';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {
  management : any;
  newManagement : Management = new Management();
  creatingMode: boolean = true;
  ManagementChunks: any[] = [];
  currentPage: number = 1;
  selectedFile!: File;
  constructor(private managementService: ManagementService, private router: Router) {
    this.getAllManagement();
  }
    getAllManagement() {
        this.managementService.getAllManagement().subscribe(data => {
          this.management = data;
         // this.divideManagementsIntoChunks();
        });
    }
  
    openModel(management : Management = new Management()) {
      if (this.management.idManagement == 0) {
        this.newManagement = new Management();
      } else {
        this.creatingMode = false;
        this.newManagement = management;
      }
    }
    deleteManagement(managementId: string) {
      this.managementService.deleteManagement(managementId).subscribe(() => {
        this.getAllManagement();
        window.location.reload();
      });
    }
  
    createManagement() {
      const newManagement = {
        bloc: this.newManagement.bloc,
        classe: this.newManagement.classe,
        start: this.newManagement.heureStart ,
        end: this.newManagement.heureFinish,
        approuvement: this.newManagement.approuvement,
        event: this.newManagement.event,
      }
      this.managementService.addManagement(newManagement).subscribe(() => {
        this.getAllManagement();
        window.location.reload();
      });
    }
  
    modifyManagement() {
      this.managementService.editManagement(this.newManagement).subscribe(() => {
        this.getAllManagement();
        window.location.reload();
      });
    }
  
    changePage(pageNumber: number) {
      this.currentPage = pageNumber;
    }
  
    getManagementForPage(pageNumber: number): any[] {
      const ManagementgetAllManagementsPerPage = 2;
      const startIndex = (pageNumber - 1) * ManagementgetAllManagementsPerPage;
      const endIndex = startIndex + ManagementgetAllManagementsPerPage;
      return this.management.slice(startIndex, endIndex);
    }
    
  
    incrementPage() {
      if (this.currentPage < this.ManagementChunks.length) {
        this.currentPage++;
      }
    }
    
    decrementPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    divideManagementIntoChunks() {
      const chunkSize = 2;
      this.ManagementChunks = [];
      for (let i = 0; i < this.management.length; i += chunkSize) {
        this.ManagementChunks.push(this.management.slice(i, i + chunkSize));
    }
    }


    selectRoom(room: string) {
      this.newManagement.classe = room;
  }
}
