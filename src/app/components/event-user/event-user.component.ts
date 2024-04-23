import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.css']
})
export class EventUserComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];
  searchQuery: string = '';
  filterByPrice: boolean = false;
  filterByNbt: boolean = false;
  currentIndex: number = 0;
  selectedUser: any = {};

  cardWidth: number = 310;
  constructor(private eventService: EventService) {
    this.getUserFromLocalStorage();

   }

  ngOnInit(): void {
    this.retrieveAllEvents();
  }

  getUserFromLocalStorage() {
    const userData = localStorage.getItem('user'); // Use 'user' as the key
    if (userData) {
      this.selectedUser = JSON.parse(userData);
      console.log(this.selectedUser); // Log the user object separately
    }
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

  toggleFilterByPrice(): void {
    if (this.filterByPrice) {
        this.retrieveAllEventsOrderedByPriceAsc();
    } else {
        this.filteredEvents = this.events;
    }
  }

  toggleFilterByNbt(): void {
    if (this.filterByNbt) {
        this.retrieveAllEventsOrderedByNbt();
    } else {
        this.filteredEvents = this.events;
    }
  }

  retrieveAllEventsOrderedByPriceAsc(): void {
    this.eventService.getAllEventsOrderedByPriceAsc().subscribe(
      (data: any) => {
        this.events = data;
        this.filteredEvents = this.events;
      },
      (error: any) => {
        console.error('Error retrieving events ordered by price:', error);
      }
    );
  }

  retrieveAllEventsOrderedByNbt(): void {
    this.eventService.findAllEventsOrderedByNbt().subscribe(
      (data: any) => {
        this.events = data;
        this.filteredEvents = this.events;
      },
      (error: any) => {
        console.error('Error retrieving events ordered by NBT:', error);
      }
    );
  }

  highlightCard(event: MouseEvent) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== event.currentTarget) {
            card.classList.add('gray-background');
        }
    });
}

resetCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('gray-background');
    });
}





}

