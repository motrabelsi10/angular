export class Equipement {
    idEquipement : number;
    equipement  : string;
    other  : string;
    TypeEquip : string;
    approuvement : boolean;
    price : number;


    constructor(){
        this.idEquipement = 0;
        this.equipement = "";
        this.other = "";
        this.TypeEquip = "";
        this.approuvement = false;
        this.price = 0;
      }
}
