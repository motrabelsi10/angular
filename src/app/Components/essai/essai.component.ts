import { Component } from '@angular/core';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent {
  message: string | undefined;
  
  constructor(private service: JwtService
    ){ }
    ngOnInit(){
      this.hello();

    }
    hello(){
      this.service.hello().subscribe(
        (response) => {
          console.log(response);
          this.message = response.message;
        }
      )
    }

}
