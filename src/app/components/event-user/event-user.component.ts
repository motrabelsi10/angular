import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { EventDetailsUserComponent } from '../event-details-user/event-details-user.component';

@Component({
  selector: 'app-event',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.css']
})
export class EventUserComponent {
  events: any;
  event: any;



  constructor(private eventService: EventService,private httpClient: HttpClient, private route: ActivatedRoute)
  {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
    });
  }

  }







  







  

