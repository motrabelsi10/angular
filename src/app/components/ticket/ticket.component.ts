import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';

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


  constructor(private router: Router,private route: ActivatedRoute, private ticketService: TicketService) { }

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

  createTicketbyEvent() {
    const today = new Date();

    const newTicket = {
      nbts: this.newTicket.nbts,
      dateAchat: today.toISOString(),
      
      typePay: this.newTicket.typePay,
    

    }
    this.ticketService.addTicketByEvent(newTicket,this.eventId).subscribe(() => {     
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
