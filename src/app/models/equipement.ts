import { Event } from "./event";

export class Equipement {
    idEquipement : number;
    equipement  : string;
    other  : string;
    typeequip : string;
    approuvement : boolean;
    price : number;
    event : Event;


    constructor(){
        this.idEquipement = 0;
        this.equipement = "";
        this.other = "";
        this.typeequip = "",
        this.approuvement = false;
        this.price = 0;
        this.event = new Event();
       
      }
}
