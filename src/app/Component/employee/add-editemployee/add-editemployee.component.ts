import { Component, Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServApiService } from 'src/app/Services/serv-api.service';

@Component({
  selector: 'app-add-editemployee',
  templateUrl: './add-editemployee.component.html',
  styleUrls: ['./add-editemployee.component.css']
})

export class AddEditemployeeComponent implements OnInit {

  employeeList$!: Observable<any[]>;

  constructor(private service:ServApiService) { }

  @Input() employee:any;
  Id: number = 0;
  Name: string = "";
  Password: string = "";
  Email: string="";
  Phone: number=0;
  Address: string="";
  Salary: string="";
  ngOnInit(): void {
    this.Id = this.employee.id;
    this.Name = this.employee.name;
    this.Password = this.employee.password;
    this.Email = this.employee.email;
    this.Phone = this.employee.phone;
    this.Address = this.employee.address;
    this.Salary = this.employee.salary;

     this.employeeList$ = this.service.getemployeeList();
   }

  addemployee() {
    var employee = {
     // this.Id     
     Name :this.Name ,    
     Password:this.Password,    
     Email:this.Email   ,  
     Phone:this.Phone      ,
     Address:this.Address ,
     Salary: this.Salary ,  
     PasswordSalt:null,
     PasswordHash:null,
     RefreshToken:null,
     TokenCreated:null,
     TokenExpires:null,
     Active     :true
    }
    this.service.addemployee(employee).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateemployee() {
    var employee = {
      Id: this.Id    , 
     Name :this.Name ,    
     Password:this.Password,    
     Email:this.Email   ,  
     Phone:this.Phone      ,
     Address:this.Address ,
     Salary: this.Salary , 
     PasswordSalt:null,
     PasswordHash:null,
     RefreshToken:null,
     TokenCreated:null,
     TokenExpires:null,
     Active     :true
    }
    var id:number = this.Id;
    this.service.updateemployee(id,employee).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
