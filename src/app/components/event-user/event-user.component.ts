import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.css']
})
export class EventUserComponent {
  events: any[] = [];
  filteredEvents: any[] = [];
  searchQuery: string = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
      this.retrieveAllEvents();
  }

  retrieveAllEvents(): void {
      this.eventService.getAllEvents().subscribe(
          (data: any) => {
              this.events = data;
              this.filteredEvents = this.events;
          },
          (error: any) => {
              console.error('Error retrieving events:', error);
          }
      );
  }

  searchEvents(): void {
    if (this.searchQuery.trim() !== '') {
        const searchTerm = this.searchQuery.toLowerCase();
        this.filteredEvents = this.events.filter(event => event.nameEvent.toLowerCase().startsWith(searchTerm));
    } else {
        this.filteredEvents = this.events;
    }
}

}
