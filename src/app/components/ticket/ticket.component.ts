import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { EventNbtService } from 'src/app/services/event-nbt.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  eventId: any;
  tickets: any[] = [];
  newTicket: any = {};
  creatingMode: boolean = true;
  event!: Event;



  constructor(private router: Router,private route: ActivatedRoute,private eventNbtService:EventNbtService,private eventService:EventService, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('idEvent');
    if (this.eventId !== null) {
      this.retrieveTicketsByEvent(this.eventId);
    }
  }
/*
  modifyTicket() {
    this.ticketService.editTicket(this.newTicket).subscribe(() => {
      
      this.retrieveTicketsByEvent(this.eventId);
    });
  }
  */

  modifyTicket() {
    // Récupérer les nbts précédents du ticket
    const previousNbts = this.tickets.find(ticket => ticket.id === this.newTicket.id)?.nbts || 0;
    
    this.ticketService.editTicket(this.newTicket).subscribe(() => {
      // Récupérer la différence entre les nbts précédents et les nbts actuels
      const nbtsDifference = this.newTicket.nbts - previousNbts;
      
      // Mettre à jour le nombre de tickets disponibles dans l'événement associé
      if (nbtsDifference > 0) {
        // Incrémenter le nombre de tickets disponibles
        this.eventNbtService.incrementNbt(this.eventId, nbtsDifference);
      } else if (nbtsDifference < 0) {
        // Décrémenter le nombre de tickets disponibles
        this.eventNbtService.decrementNbt(this.eventId, Math.abs(nbtsDifference));
      }
      
      // Rafraîchir la liste des tickets après la modification
      this.retrieveTicketsByEvent(this.eventId);
    });
  }
  


  
  
  
  


  
  retrieveTicketsByEvent(eventId: number): void {
    this.ticketService.retrieveTicketsByEvent(eventId).subscribe(
      (response: any) => {
        this.tickets = response;
      },
      (error: any) => {
        console.error('Error fetching tickets by event:', error);
      }
    );
  }

  createTicketbyEvent() {
    this.eventService.getEvent(this.eventId).subscribe((event: any) => {
      const availableTickets = event.nbt;
      const selectedTickets = this.newTicket.nbts; 
        if (selectedTickets <= availableTickets) {
        const newTicket = {
          nbts: selectedTickets,
          dateAchat: new Date(),
          typePay: this.newTicket.typePay
        };
          this.ticketService.addTicketByEvent(newTicket, this.eventId).subscribe(() => {
          this.eventNbtService.decrementNbt(this.eventId, selectedTickets);
            this.retrieveTicketsByEvent(this.eventId);
            this.newTicket = {};
        });
      } else {
        console.error('Cannot select more tickets than available.');
      }
    });
  }
  
  deleteTicket(ticketId: string) {
  
    this.ticketService.deleteTicket(ticketId).subscribe(() => {
      this.retrieveTicketsByEvent(this.eventId);
    });
  }
  


  
  
  
  
  


  

  openModel(ticket: Ticket = new Ticket()) {
    if (ticket.idTicket == 0) {
      this.newTicket = new Ticket();
    } else {
      this.creatingMode = false;
      this.newTicket = ticket;
    }
  }


}
