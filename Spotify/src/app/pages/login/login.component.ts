import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public usernameFromControl=new FormControl(null,[Validators.required,Validators.email]);
public passwordFromControl=new FormControl(null,[Validators.minLength(6)]);
public userFrom!: FormGroup;
  constructor() { }


  ngOnInit()  {
    this.userFrom= new FormGroup({
      username:this.usernameFromControl,
      password:this.passwordFromControl,
    })
  }
  OnSubmit(){
    console.log(this.userFrom.value);
  };

}
