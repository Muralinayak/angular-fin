import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username :string=''
  public password : string=''
  public status : string =''
  public DoLogin():boolean{
    if (this.username=='admin' && this.password =='nimda') {
      this.status="Login successfull !" ;
       return true; 
    }
    this .status ="login failes!";
    return false ;
  }

  public DoCancel():void{
    this.username='';
    this.password='';
    this.status='';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
