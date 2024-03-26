import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events: any;
  newEvent: Event = new Event();
  creatingMode: boolean = true;

  eventsChunks: any[] = [];
  currentPage: number = 1;
  selectedFile!: File;



  constructor(private eventService: EventService, private router: Router) {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
      this.divideEventsIntoChunks();
    });
  }

  deleteEvent(eventId: string) {
    this.eventService.deleteEvent(eventId).subscribe(() => {
      this.getAllEvents();
      window.location.reload();
    });
  }





  createEvent() {
    const newEvent = {
      nameEvent: this.newEvent.nameEvent,
      description: this.newEvent.description,
      dateStart: this.newEvent.dateStart,
      dateFinish: this.newEvent.dateFinish,
      place: this.newEvent.place,
      nbt: this.newEvent.nbt,
      price: this.newEvent.price,
      typeticket: this.newEvent.typeticket,

    }
    this.eventService.addEvent(newEvent).subscribe(() => {
      
      this.getAllEvents();
      window.location.reload();
    });
  }

  







  modifyEvent() {
    this.eventService.editEvent(this.newEvent).subscribe(() => {
      
      this.getAllEvents();
      window.location.reload();
    });
  }

  openModel(event: Event = new Event()) {
    if (event.idEvent == 0) {
      this.newEvent = new Event();
    } else {
      this.creatingMode = false;
      this.newEvent = event;
    }
  }

  divideEventsIntoChunks() {
    const chunkSize = 2;
    this.eventsChunks = [];
    for (let i = 0; i < this.events.length; i += chunkSize) {
      this.eventsChunks.push(this.events.slice(i, i + chunkSize));
    }
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getEventsForPage(pageNumber: number): any[] {
    const eventsPerPage = 2;
    const startIndex = (pageNumber - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    return this.events.slice(startIndex, endIndex);
  }
  

  incrementPage() {
    if (this.currentPage < this.eventsChunks.length) {
      this.currentPage++;
    }
  }
  
  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
}
