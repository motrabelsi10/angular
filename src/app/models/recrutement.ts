export class Recrutement {
    idRecrutement: number;
    title :string;
    dateStart:Date;
    dateFinish:Date;
    niveau:number;
    description:string;

    constructor(){
        this.idRecrutement = 0;
        this.title = "";
        this.dateStart = new Date();
        this.description = "";
        this.dateFinish = new Date();
        
        this.niveau = 0;
       
      }
}
