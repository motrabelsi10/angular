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
feedback : any;
newFeedback : Feedback = new Feedback();
creatingMode: boolean = true;

feedbackChunks: any[] = [];
currentPage: number = 1;
selectedFile!: File;
constructor(private feedbackService: FeedbackService, private router: Router) {
  this.getAllFeedback();
}
  getAllFeedback() {
      this.feedbackService.getAllFeedback().subscribe(data => {
        this.feedbackChunks = data;
       // this.divideFeedbacksIntoChunks();
      });
  }

  openModel(feedback: Feedback = new Feedback()) {
    if (feedback.idFeedback == 0) {
      this.newFeedback = new Feedback();
    } else {
      this.creatingMode = false;
      this.newFeedback = feedback;
    }
  }
  deleteFeedback(feedbacktId: string) {
    this.feedbackService.deleteFeedback(feedbacktId).subscribe(() => {
      this.getAllFeedback();
      window.location.reload();
    });
  }

  createFeedback() {
    const newfeedback = {
      title: this.newFeedback.title,
      body: this.newFeedback.body,
      note: this.newFeedback.note ,
      dateFeedback: new Date,
      user: this.newFeedback.user,

    }
    this.feedbackService.addFeedback(this.newFeedback).subscribe(() => {
      this.getAllFeedback();
      window.location.reload();
    });
  }

  modifyFeedback() {
    this.feedbackService.editFeedback(this.newFeedback).subscribe(() => {
      this.getAllFeedback();
      window.location.reload();
    });
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getFeedbacksForPage(pageNumber: number): any[] {
    const feedbacksPerPage = 2;
    const startIndex = (pageNumber - 1) * feedbacksPerPage;
    const endIndex = startIndex + feedbacksPerPage;
    return this.feedback.slice(startIndex, endIndex);
  }
  

  incrementPage() {
    if (this.currentPage < this.feedbackChunks.length) {
      this.currentPage++;
    }
  }
  
  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  divideFeedbacksIntoChunks() {
    const chunkSize = 2;
    this.feedbackChunks = [];
    for (let i = 0; i < this.feedback.length; i += chunkSize) {
      this.feedbackChunks.push(this.feedback.slice(i, i + chunkSize));
  }
  }

  handleTypeChange() {
    
    if (this.newFeedback.note == true ) {
      
    }
  }
}
