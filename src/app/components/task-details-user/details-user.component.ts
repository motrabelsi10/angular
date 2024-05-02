import { TaskService } from '../../Services/task.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteerService } from 'src/app/Services/volunteer.service';
import { Volunteer } from 'src/app/models/volunteer';

@Component({
  selector: 'app-task-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent {
  task: any;
  idTask: any;
  newVolunteer: Volunteer = new Volunteer();
  creatingMode: boolean = true;
  volunteers: any;
  volunteersChunks: any[] = [];
  showDialog: boolean = false;


  constructor(private taskService: TaskService, private volunteerService: VolunteerService,
              private httpClient: HttpClient, private route: ActivatedRoute) {
    this.idTask = this.route.snapshot.paramMap.get('idTask');
    this.getTask(this.idTask);
  }

  getTask(idTask: any) {
    this.taskService.getTask(idTask).subscribe(data => {
      this.task = data;
    });
  }

  openModel(volunteer: Volunteer = new Volunteer()) {
    if (volunteer.idVolunteer == 0) {
      this.newVolunteer = new Volunteer();

    } else {
      this.newVolunteer = volunteer;
    }
  }

  createVolunteerByTask() {
    this.volunteerService.addVolunteerByTask(this.newVolunteer, this.idTask).subscribe(
      () => {
        this.newVolunteer = new Volunteer();

        this.getTask(this.idTask);
      },
      error => {
        console.error('Error creating volunteer:', error);
      }
    );
  }


  //retrieveNumberVolunteersByIdTask






  openDialog(): void {
    this.showDialog = true;
  }




}
