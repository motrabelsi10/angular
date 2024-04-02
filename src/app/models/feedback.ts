import { Event } from "./event";
import { User } from "./user";

export class Feedback {
   
    idFeedback : number;
    title  : string;
    body  : string;
    date : Date;
    note : boolean;
    user : User;
    event : Event;

    constructor(){
        this.idFeedback = 0;
        this.title = "";
        this.body = "";
        this.date = new Date();
        this.note = false;
        this.user = new User();
        this.event = new Event();
      }
  
}
