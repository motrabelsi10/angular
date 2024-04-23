import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-event-club',
  templateUrl: './event-club.component.html',
  styleUrls: ['./event-club.component.css']
})
export class EventClubComponent {

  events: any;
  newEvent: Event = new Event();
  creatingMode: boolean = true;
  show: boolean = false;
    eventsChunks: any[] = [];
  currentPage: number = 1;
  selectedFile!: File;
  currentSection: number = 1;
  nameEventTouched: boolean = false;
  showNav = true;
  selectedUser: any = {};
  id : any;





  constructor(private eventService: EventService, private router: Router) {
    this.getUserFromLocalStorage();
    this.getAllEvents();

  }

  getUserFromLocalStorage() {
    const userString = localStorage.getItem('user');
    console.log(userString);
    const user = userString ? JSON.parse(userString) : null;
    this.id = user ? user.idUser : "";
  }

  getAllEvents() {
    console.log()
    this.eventService.retrieveEventsByUser(this.id).subscribe(data => {
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
  setCurrentSection(section: number) {
    this.currentSection = section;
  }



  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  nextSection() {
    this.currentSection++;
}

previousSection() {
    this.currentSection--;
}

areFieldsFilled(): boolean {
  switch (this.currentSection) {
      case 1:
          return !!this.newEvent.nameEvent && !!this.newEvent.description;
      case 2:
        return !!this.newEvent.place;
      case 3:
          return !!this.newEvent.nbt && (!!this.newEvent.typeticket || this.newEvent.typeticket === 'nonPayante') && (!this.newEvent.typeticket || this.newEvent.typeticket === 'nonPayante' || !!this.newEvent.price);
      case 4:      
          return !!this.newEvent.dateStart && !!this.newEvent.dateFinish;
      default:
          return false;
  }
}

  


  
  createEvent() {
    const formData = new FormData();
    formData.append('nameEvent', this.newEvent.nameEvent);
    formData.append('description', this.newEvent.description);
    
    if (this.newEvent.dateStart instanceof Date) {
      formData.append('dateStart', new Date(this.newEvent.dateStart).toISOString());
    } else {
      console.error('this.newEvent.dateStart is not an instance of Date');
    }
    
    if (this.newEvent.dateFinish instanceof Date) {
      formData.append('dateFinish', new Date(this.newEvent.dateFinish).toISOString()); // Utilisez dateFinish ici
    } else {
      console.error('this.newEvent.dateFinish is not an instance of Date');
    }
    
    formData.append('place', this.newEvent.place);
    formData.append('nbt', this.newEvent.nbt.toString());
    formData.append('typeticket', this.newEvent.typeticket);
    formData.append('price', this.newEvent.price.toString());
    formData.append('imageFile', this.selectedFile); // Ajoutez le fichier ici
  
    this.eventService.addEventByUser(formData,this.id).subscribe(() => {
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
    const chunkSize = 4;
    this.eventsChunks = [];
    for (let i = 0; i < this.events.length; i += chunkSize) {
      this.eventsChunks.push(this.events.slice(i, i + chunkSize));
    }
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getEventsForPage(pageNumber: number): any[] {
    const eventsPerPage = 4;
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

  handleTicketTypeChange() {
    if (this.newEvent.typeticket === 'nonPayante') {
      this.newEvent.price = 0; // Définir le prix à 0
    }
  }

}
