import { Equip } from "./equip";
import { Typeequip } from "./typeequip";

export class Equipement {
    idEquipement : number;
    equipement  : Equip;
    other  : string;
    TypeEquip : Typeequip;
    approuvement : boolean;
    price : number;


    constructor(){
        this.idEquipement = 0;
        this.equipement = Equip.other;
        this.other = "";
        this.TypeEquip = Typeequip.nothing,
        this.approuvement = false;
        this.price = 0;
      }
}
