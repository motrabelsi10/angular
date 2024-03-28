import { Bloc } from "./bloc";
import { Classe } from "./classe";

export class Management {
    idManagement : number;
    bloc  : Bloc;
    classe : Classe;
    heureStart : Date;
    heureFinish : Date;
    approuvement : boolean;
    event : number;


    constructor(){
        this.idManagement = 0;
        this.bloc = Bloc.A;
        this.classe = Classe.cours;
        this.heureStart = new Date();
        this.heureFinish = new Date();
        this.approuvement = false;
        this.event = 0;
      }
}
