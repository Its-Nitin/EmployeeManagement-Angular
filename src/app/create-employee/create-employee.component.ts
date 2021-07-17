import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import  Swal  from 'sweetalert2'; 

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = {employeeName:'', employeeEmailId:'',employeePhoneNumber:''}

  constructor(private service : EmployeeServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
   
      Swal.fire({  
        text: 'Press save to Add Employee Detail',  
        showCancelButton: true,  
        confirmButtonText: 'Save',  
        cancelButtonText: 'Edit'  
      }).then((result) => {  
        if (result.value) {  
          this.service.createEmployee(this.employee).subscribe((result) => {
            this.router.navigate(["showAll"]);
          }, err =>console.log(err));
        } else result.dismiss === Swal.DismissReason.cancel 
      })  
    
  }

}
