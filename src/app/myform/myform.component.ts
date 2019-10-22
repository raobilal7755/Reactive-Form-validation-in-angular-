import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
 
  get fname(){return this.myform.get('fname')}
  get lname(){return this.myform.get('lname')}
  get email(){return this.myform.get('email')}
  get street(){return this.myform.get('address.street')}
  get city(){return this.myform.get('address.city')}
  get state(){return this.myform.get('address.state')}
  get zipcode(){return this.myform.get('address.zipcode')}


  myform=this.mybuilder.group({
    fname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    lname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    email:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12),Validators.email]],
    address:this.mybuilder.group({
      street:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      state:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      zipcode:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    })
  });


  constructor(private mybuilder:FormBuilder) { }

  ngOnInit() {
  }

  myfun(myform:any){
    
    console.log(myform.controls)
  }

}
