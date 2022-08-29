import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public username :string='';
  public password :string='';
  public confirmpassword :string ='';
  public Dateofbirth :string='';
  public status : string='';

  public register():boolean{
    if (this.username=='murali' && this.password =='nayak' ) {
      this.status="registration succesfull..!"
       return true; 
    }
  this .status ="registration failed ..!"
    return false ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
