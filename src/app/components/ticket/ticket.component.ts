import { Component, OnInit, ViewChild } from '@angular/core';
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
  totalPrice: number = 0;

  creatingMode: boolean = true;
  event!: Event;
  exceedsAvailableTickets: boolean = false;





  constructor(private router: Router,private route: ActivatedRoute,private eventNbtService:EventNbtService,private eventService:EventService, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('idEvent');
    if (this.eventId !== null) {
      this.retrieveTicketsByEvent(this.eventId);
    }
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

  calculateTotalPrice(nbts: number, pricePerTicket: number): number {
    return nbts * pricePerTicket;
}
updateTotalPrice() {
  const pricePerTicket = this.newTicket.event.price;
  this.totalPrice = this.calculateTotalPrice(this.newTicket.nbts, pricePerTicket);
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
          this.exceedsAvailableTickets = true; // Activer le drapeau si le nombre de tickets sélectionnés dépasse le nombre de tickets disponibles
      }
  });
}

  
  deleteTicket(ticketId: string) {
    this.ticketService.getTicket(ticketId).subscribe((ticket: any) => {
        if (ticket) {
            const nbtsToDelete = ticket.nbts;
                this.ticketService.deleteTicket(ticketId).subscribe(() => {
                this.eventNbtService.incrementNbt(this.eventId, nbtsToDelete);
                this.retrieveTicketsByEvent(this.eventId);
            });
        } else {
            console.error('Ticket not found with ID:', ticketId);
        }
    });
}

modifyTicket() {
  const previousNbts = this.tickets.find(ticket => ticket.idTicket === this.newTicket.idTicket)?.nbts || 0;
  this.ticketService.editTicket(this.newTicket).subscribe(() => {
      const nbtsDifference = this.newTicket.nbts - previousNbts;
      if (nbtsDifference > 0) {
          this.eventNbtService.incrementNbt(this.newTicket.event.id, nbtsDifference);
      } else if (nbtsDifference < 0) {
          this.eventNbtService.decrementNbt(this.newTicket.event.id, Math.abs(nbtsDifference));
      }
          this.retrieveTicketsByEvent(this.newTicket.event.id);
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
