import { Bloc } from "./bloc";
import { Classe } from "./classe";

export class Management {
    idManagement : number;
    bloc  : string;
    classe : string;
    heureStart : Date;
    heureFinish : Date;
    approuvement : boolean;
    event : number;


    constructor(){
        this.idManagement = 0;
        this.bloc = "";
        this.classe = "";
        this.heureStart = new Date();
        this.heureFinish = new Date();
        this.approuvement = false;
        this.event = 0;
      }
}
