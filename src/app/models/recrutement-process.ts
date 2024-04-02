import { Recrutement } from "./recrutement";

export class RecrutementProcess {
    idProcessRecrutement:number;
    skills: string;
    whyToJoin: string;
    availability: string; // Full-time or Part-time
    integratedInOtherClubs: boolean;
    otherClubs: string[]; // If integratedInOtherClubs is true
    interviewDate: Date;
    recrutement: Recrutement;
    

    constructor(){
        this.idProcessRecrutement = 0;
        this.interviewDate = new Date();
        this.integratedInOtherClubs =false;
        this.availability='';
        this.skills='';
        this.whyToJoin='';
        this.otherClubs=[];
        this.recrutement= new Recrutement();



       
      }

}
