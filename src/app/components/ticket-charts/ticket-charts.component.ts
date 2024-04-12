import { Component } from "@angular/core";
import { TicketService } from "../../services/ticket.service";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: 'app-ticket-charts',
  templateUrl: './ticket-charts.component.html',
  styleUrls: ['./ticket-charts.component.css']
})
export class TicketChartsComponent {

  chartOptions: any;
  eventsData: any[] = [];


  constructor(private ticketService: TicketService,private eventService: EventService) { 
    this.ticketService.getTotalTicketsByDateAchat().subscribe((data: any) => {
      const dataPoints = [];
      for (const date in data) {
        if (data.hasOwnProperty(date)) {
          dataPoints.push({ y: data[date], label: date });
        }
      }

      // Mettre à jour les options pour le graphique à colonnes
      const columnChartOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Tickets sold by date"
        },
        axisX: {
          title: "Date"
        },
        axisY: {
          title: "Tickets", 
          lineColor: "transparent", 
          gridColor: "transparent",
          tickColor: "transparent", 
          labelFontColor: "transparent",
          includeZero: true
        },
        data: [{
          type: "column",
          indexLabelPlacement: "outside",
          indexLabelFontColor: "#333",
          indexLabelFontSize: 14,
          indexLabel: "{y}",
          toolTipContent: "{label}: {y}", 
          dataPoints: dataPoints
        }],
        margin: {
          top: 20,
          bottom: 50,
          left: 20,
          right: 20
        }
      };

      // Appeler getTotalTicketsByTypeAchat pour obtenir les données pour le graphique "pie"
      this.ticketService.getTotalTicketsByTypeAchat().subscribe((pieData: any) => {
        const pieDataPoints = [];
        for (const type in pieData) {
          if (pieData.hasOwnProperty(type)) {
            pieDataPoints.push({ y: pieData[type], label: type });
          }
        }

        // Mettre à jour les options pour le graphique "pie"
        const pieChartOptions = {
          animationEnabled: true,
          theme: "light2",

          title: {
            text: "Tickets sold by type of purchase"
          },
          data: [{
            type: "pie",
            showInLegend: true,
            startAngle: -90,
            indexLabel: "{label}",
            yValueFormatString: "#",
            dataPoints: pieDataPoints
          }],
          margin: {
            top: 20,
            bottom: 50,
            left: 20,
            right: 20
          }
        };
        this.chartOptions = [columnChartOptions, pieChartOptions];
      });

      this.ticketService.getTotalPricesByEvent().subscribe((data: any) => {
        for (const eventId in data) {
          if (data.hasOwnProperty(eventId)) {
            const eventName = eventId;
            const totalPrice = data[eventId]; 
                  this.eventsData.push({ name: eventName, totalPrice: totalPrice });
          }
        }
      });
      


      
    });
  }
}


