import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteerService } from 'src/app/Services/volunteer.service';

@Component({
  selector: 'app-task-details-user',
  templateUrl: './volunteer-details-user.component.html',
  styleUrls: ['./volunteer-details-user.component.css']
})
export class VolunteerDetailsUserComponent {
  volunteers: any;
  volunteer: any;
  idVolunteer: any;

  constructor(private volunteerservice: VolunteerService, private httpClient: HttpClient, private route: ActivatedRoute) {
    this.idVolunteer = this.route.snapshot.paramMap.get('idVolunteer'); // Récupérer l'ID de tache à partir des paramètres de l'URL
    this.getVolunteer(this.idVolunteer);
  }

  getVolunteer(idVolunteer: any) {
    this.volunteerservice.getVolunteer(idVolunteer).subscribe(data => {
      this.volunteer = data;
    });
  }

}
