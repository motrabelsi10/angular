import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecrutementService } from 'src/app/Services/recrutement.service';

@Component({
  selector: 'app-recrutement-details-user',
  templateUrl: './recrutement-details-user.component.html',
  styleUrls: ['./recrutement-details-user.component.css']
})
export class RecrutementDetailsUserComponent implements OnInit {
  recrutement: any;
  idRecrutement: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private recrutementService: RecrutementService
  ) {}

  ngOnInit() {
    const idRecrutementParam = this.route.snapshot.paramMap.get('idRecrutement');
    if (idRecrutementParam !== null) {
      this.idRecrutement = parseInt(idRecrutementParam, 10);
      this.getRecrutement(this.idRecrutement);
    }
  }
  
  
  getRecrutement(idRecrutement: number) {
    this.recrutementService.getRecrutement(idRecrutement).subscribe(data => {
      this.recrutement = data;
    });
  }
}
