import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-club-regestration',
  templateUrl: './club-regestration.component.html',
  styleUrls: ['./club-regestration.component.css']
})
export class ClubRegestrationComponent {
  registerForm: FormGroup;
  
  creatingMode : boolean = true;
  userToModify : User = new User();

 
  constructor(
    private service: JwtService,
    private fb: FormBuilder,

  ) {
    // Initialize registerForm in the constructor
    this.registerForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      clubName: ['', [Validators.required]],
      telNumber: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      address: ['', [Validators.required]],
      clubDetails: ['', [Validators.required]],
      clubTypes: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // No need to initialize registerForm here anymore
  }

  submitForm() {
    
     console.log(this.registerForm.value);
     this.service.clubregister(this.registerForm.value).subscribe(
      ( Response ) => {
        
        alert("User Added Successfully");
        window.location.reload();
        console.log(Response)
        
      }
    )
   

   



  }

}
