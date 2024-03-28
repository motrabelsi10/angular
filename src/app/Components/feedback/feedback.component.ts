import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
Feedback : any;
newFeedback : Feedback = new Feedback();
creatingMode: boolean = true;

feedbackChunks: any[] = [];
currentPage: number = 1;
selectedFile!: File;
constructor(private eventService: FeedbackService, private router: Router) {
  this.getAllFeedback();
}
  getAllFeedback() {
  
      this.eventService.getAllFeedback().subscribe(data => {
        this.Feedback = data;
        this.divideEventsIntoChunks();
      });
  }
  
  divideEventsIntoChunks() {
    const chunkSize = 2;
    this.feedbackChunks = [];
    for (let i = 0; i < this.feedbackChunks.length; i += chunkSize) {
      this.feedbackChunks.push(this.Feedback.slice(i, i + chunkSize));
  }
  }
}
