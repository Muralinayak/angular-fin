import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

 
  public username :string='';
  public password :string='';
  public status : string='';
  public email : string ='';
  

  public login():boolean{
    if (this.username=='murali' && this.password =='nayak' ) {
      this.status=" Great Your loged in ..!"
       return true; 
    }
  this .status ="oopss Login failed..!"
    return false ;

  }

  public Register():void{

  }
  constructor() { }

  ngOnInit(): void {
  }

}


 

