export class Task {
    nameTask : string;
    idTask : number;
    approuvement : boolean;
    taskStart : Date;
    taskFinish : Date;
    details : string;
    numberVolunteer : number;
    skills: string[]; 
    constructor(){
        this.nameTask = '';
        this.idTask = 0;
        this.approuvement = false;
        this.taskStart = new Date();
        this.taskFinish = new Date();
        this.details = '';
        this.numberVolunteer = 0;
        this.skills = [];

    }
}
