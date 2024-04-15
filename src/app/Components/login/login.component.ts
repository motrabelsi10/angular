import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { JwtService } from 'src/app/service/jwt.service';
import { UserService } from 'src/app/service/user.service';

/*interface User {
  roles: string[];
  jti: string;
  sub: string;
  iat: number;
  exp: number;
}

interface AuthenticationResponse {
  jwtToken: string;
}
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm!: FormGroup ;
 role!:Role;
 user:any;
  constructor(
    private service:JwtService,
    private fb: FormBuilder,
    private router:Router,
    private userService:UserService

  ){ }
  
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: ['', Validators.required, Validators.email],
      password: ['',Validators.required],



    })
  }

  submitFrom(){
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if( response.jwtToken !== null){
          alert("Helloooooooo"+  response.jwtToken);
          const jwtToken = response.jwtToken;
          localStorage.setItem('jwtToken',jwtToken);
          //const user: User = JSON.parse(atob(response.jwtToken.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur

          this.userService.retrieveByMail(this.loginForm.get('mail')?.value).subscribe(data => {
            this.user = data;
            console.log(this.user)
            localStorage.setItem('user',JSON.stringify(data));
          });
         /* const role = user.roles[0];
          console.log(role);*/
          //this.router.navigateByUrl("/user");
        }
        else {
          alert("Authentication Failed !");
        }
      }
    )
    

  }

}
