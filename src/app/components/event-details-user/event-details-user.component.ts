import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details-user',
  templateUrl: './event-details-user.component.html',
  styleUrls: ['./event-details-user.component.css']
})
export class EventDetailsUserComponent {
  events: any;
  event: any;
  idEvent: any;

  constructor(private eventService: EventService, private httpClient: HttpClient, private route: ActivatedRoute) {
    this.idEvent = this.route.snapshot.paramMap.get('idEvent'); // Récupérer l'ID de l'événement à partir des paramètres de l'URL
    this.getEvent(this.idEvent);
  }

  getEvent(idEvent: any) {
    this.eventService.getEvent(idEvent).subscribe(data => {
      this.event = data;
    });
  }

}
