import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  

 
 
  Otp=true;
  PassKey=true;
  displayForm=true;


  angForm=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    address: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  })

  dispEmp(event){
    this.displayForm = false;
    this.PassKey = true;
    this.Otp=true;
    }
   dispAdmin(event){
  this.PassKey = false;
  this.Otp=true;   
}
  
   dispCust(event){
    this.PassKey =true;
    this.Otp=false;
   }


   constructor(private fb: FormBuilder) {
   // this.createForm();
  }

  /*createForm() {
    this.angForm = this.fb.group({
      
      name: ['', Validators.required,Validators.minLength(4),Validators.maxLength(8)],
      
      address: ['', Validators.required ]
    });
  }*/

  ngOnInit(): void {
  
  
  }
  
}
