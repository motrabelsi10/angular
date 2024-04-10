import { Event } from "./event";
export class Ticket {
    idTicket: number;
    nbts: number;
    dateAchat: Date;
    typePay: string;
    user: number;
    event: Event; 
    qrcode: string;

    constructor() {
        this.idTicket = 0;
        this.nbts = 0;
        this.dateAchat = new Date();
        this.typePay = '';
        this.user = 0;
        this.event = new Event(); 
        this.qrcode = '';
    }
}
