import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  public Imageurls:string[]=["../assets/smile.png","../assets/smile.png","../assets/smile.png"]

  ngOnInit(): void {
  }


  public people:Person[]=[];
  public AddPerson(name:string,age:string,email:string){
  
    var newPerson=new Person();
     newPerson.Age=Number(age);
     newPerson.Name=name;
     newPerson.Email=email;

     this.people.push(newPerson);

  }

  Donttroubleme()
  {

  }
  Getall()
  {
return this .people;
  }

  ChangeColor(funny:any)
  {
funny.style.backgroundColor='yellow'
funny.style.color="blue"
console.log(funny.style);
  }

  OnMouseOut(funny:any)
  {
    funny.style.backgroundColor='blue'
    funny.style.borderColor='yellow'
  }

  NavigateTo()
  {
    this.route.navigateByUrl("login");
  }

}
