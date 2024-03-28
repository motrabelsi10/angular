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

  deleteTicket(ticketId: string) {
    this.ticketService.deleteTicket(ticketId).subscribe(() => {
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
      const availableTickets = event.nbt; // Nombre de tickets disponibles
      const selectedTickets = this.newTicket.nbts; // Nombre de tickets sélectionnés dans le formulaire
  
      // Vérifier si le nombre de tickets sélectionnés est inférieur ou égal au nombre de tickets disponibles
      if (selectedTickets <= availableTickets) {
        // Créer le nouveau ticket avec la date actuelle
        const newTicket = {
          nbts: selectedTickets,
          dateAchat: new Date(), // Utiliser la date actuelle
          typePay: this.newTicket.typePay
        };
  
        // Appeler le service pour ajouter le ticket
        this.ticketService.addTicketByEvent(newTicket, this.eventId).subscribe(() => {
          // Mettre à jour le nombre de tickets disponibles
          this.eventNbtService.decrementNbt(this.eventId, selectedTickets);
  
          // Récupérer à nouveau les tickets après l'ajout du nouveau ticket
          this.retrieveTicketsByEvent(this.eventId);
  
          // Réinitialiser le formulaire pour le prochain ajout
          this.newTicket = {};
        });
      } else {
        // Afficher un message d'erreur si le nombre de tickets sélectionnés est supérieur au nombre de tickets disponibles
        console.error('Cannot select more tickets than available.');
        // Vous pouvez également afficher un message d'erreur à l'utilisateur pour l'informer
      }
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
