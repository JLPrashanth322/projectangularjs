

import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
// import { CodeService } from './code.service';
// import{GetapiService } from './getapi.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  registerForm!:FormGroup 
  title = 'PROJECTANGULARJS';
  Submitted = false;
  FormGroup: any;
  isFormSubmit = false;
  data:any=[];


  // constructor (private api: GetapiService){}
  
  ngOnInit(){
    
    
    
    
    

    this.registerForm=new FormGroup({

      email:new FormControl('',[Validators.required,Validators.email]),
      firstName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+/^\S*$/")]),
      lastName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+/^\S*$/")]),
      contactNo:new FormControl('',[Validators.required,Validators.pattern( "^((\\+91-?)|0)?[0-9]{10}$")]),
      Address:new FormControl('',[Validators.required,Validators.pattern("/[a-zA-Z0-9]/")])


})


  }
  ngOnInt(){
    // {
    // this.api.apicall().subscribe((data: any)=>{
    //   console.warn("get api data",data);
    //   // this.title data=['title'];
    // })
    // }
    
  }

get f() { return this.registerForm.controls; }

  

  onSubmit(formData:any){
   
    this.isFormSubmit = true;
    this.Submitted = true

    this.data.push(formData.value);
    

    this.resetForm()
    console.log(this.data);
    
  }
  resetForm()
  {
    this.registerForm.reset();
  }

}
