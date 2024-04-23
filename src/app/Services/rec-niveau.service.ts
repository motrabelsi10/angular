import { Injectable } from '@angular/core';
import { RecrutementService } from './recrutement.service';
import { Recrutement } from '../models/recrutement';
@Injectable({
  providedIn: 'root'
})
export class RecNiveauService {


  constructor(private recrutementService:RecrutementService) { }

  decrementNbt(idRecrutement: number, niveau: number): void {
  this.recrutementService.getRecrutement(idRecrutement).subscribe(
    (recrutement: any) => { 
      if (recrutement.niveau > 0) { 
        recrutement.niveau -= niveau;
        if (recrutement.niveau < 0) {
          recrutement.niveau = 0;
        }
        this.recrutementService.editRecrutement(recrutement).subscribe(
          () => {
            console.log('vacanicies updated successfully.');
          },
          (error) => {
            console.error('Error updating vacanicies NBT:', error);
          }
        );
      } else {
        console.warn('vacanicies NBT is already 0. Cannot decrement further.');
      }
    },
    (error) => {
      console.error('Error fetching vacanicies details:', error);
    }
  );
}

incrementNbt(idRecrutement: number, niveau: number): void {
  this.recrutementService.getRecrutement(idRecrutement).subscribe(
    (recrutement: any) => {
      
      recrutement.niveau += niveau;

        this.recrutementService.editRecrutement(recrutement).subscribe(
          () => {
            console.log('vacanicies NBT incremented successfully.');
          },
          (error) => {
            console.error('Error updating vacanicies NBT:', error);
          }
        );
      
    },
    (error) => {
      console.error('Error fetching event details:', error);
    }
  );
}


}
