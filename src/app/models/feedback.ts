export class Feedback {
   
    idFeedback : number;
    title  : string;
    body  : string;
    date : Date;
    note : boolean;
    user : number;

    constructor(){
        this.idFeedback = 0;
        this.title = "";
        this.body = "";
        this.date = new Date();
        this.note = false;
        this.user = 1;
      }
  
}
