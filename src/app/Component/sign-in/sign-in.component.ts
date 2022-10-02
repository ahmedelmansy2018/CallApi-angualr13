import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServApiService } from 'src/app/Services/serv-api.service';
import { passwordMatch } from 'src/app/CustomValidators/password-match.validator';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

 

export class SignInComponent implements OnInit  {
  password: string = "";
  email: string="";
 // userRegFrm: FormGroup;




  
  constructor(private apiService:ServApiService, private router:Router,private fb: FormBuilder) {

    // this.userRegFrm = fb.group({
    //   email: ['', [Validators.required]],
    //    password: ['', [Validators.required]],
    // });

  }
  ngOnInit(): void {
   
      
  }
  submitForm() {
    var tokenRequestodel = {
      // this.Id     
      Password:this.password,    
      Email:this.email   ,  
      
     }
     

    console.log("sadasdasd");
    console.log(this.email);

       this.apiService.login(tokenRequestodel)
      .subscribe((response) => { 
        console.log(response);
        if(response.isAuthenticated){
        this.router.navigate(['/home']);
      }
      });
     return;
    } 
 
//  get email(){
//    return this.userRegFrm.get('email')?.value
//   }
//   get password(){
//     return this.userRegFrm.get('password')?.value
//    }
//}

 }
