import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

/******************** **********************/
  dark(){
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('data-bs-theme',"dark");
    }
  }
  light(){
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('data-bs-theme',"light");
    }
  
  }

  /*********************************** */
}
