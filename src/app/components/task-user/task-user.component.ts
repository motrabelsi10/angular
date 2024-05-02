import { TaskService } from './../../Services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task-user.component.html',
  styleUrls: ['./task-user.component.css']
})
export class TaskUserComponent implements OnInit {
  tasks: any;
  task: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('id');
      if (taskId) {
        this.getTask(taskId);
      } else {
        this.getAllTasks();
      }
    });
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  getTask(taskId: any) {
    this.taskService.getTask(taskId).subscribe(data => {
      this.task = data;
    });
  }






}
