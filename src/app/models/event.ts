export class Event {

    idEvent : number;
    nameEvent  : string;
    description  : string;
    dateStart  : Date;
    dateFinish  : Date;
    place  : string;
    nbt  : number;
    user : number;
    price : number;
    typeticket: string;
    imagePath: string;


    constructor(){
      this.idEvent = 0;
      this.nameEvent = "";
      this.dateStart = new Date();
      this.description = "";
      this.dateFinish = new Date();
      this.place = "";
      this.nbt = 0;
      this.user = 1;
      this.price =0;
      this.typeticket = '';
      this.imagePath="";
    }
}
