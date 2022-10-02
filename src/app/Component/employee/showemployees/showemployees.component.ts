import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServApiService } from 'src/app/Services/serv-api.service';
@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrls: ['./showemployees.component.css']
})

export class ShowemployeesComponent implements OnInit {

  employeeList$!:Observable<any[]>;


  constructor(private service:ServApiService) { }

  ngOnInit(): void {
    this.employeeList$ = this.service.getemployeeList();
   }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditemployeeComponent:boolean = false;
  employee:any;

  modalAdd() {
    this.employee = {
   

      Id: 0,
      Name:   "",
      Password: "",
      Email: "",
      Phone:"",
      Address:"",
      Salary: 0

    }
    this.modalTitle = "Add employee";
    this.activateAddEditemployeeComponent = true;
  }

  modalEdit(item:any) {
    this.employee = item;
    this.modalTitle = "Edit employee";
    this.activateAddEditemployeeComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete employee ${item.id}`)) {
      this.service.deleteemployee(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.employeeList$ = this.service.getemployeeList();
      })
    }
  }

  modalClose() {
    this.activateAddEditemployeeComponent = false;
    this.employeeList$ = this.service.getemployeeList();
  }
}
