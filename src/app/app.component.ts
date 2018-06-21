import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.idn="9"

    // this.ages = this.idn;
    // console.log("ages "+this.ages);

  }
  public birthdate: string;
  public age: string;
  idn: string;
  title = 'app';
  ages;
  today;
  year;
  onKeyUp(event: any) {

    this.ages = event.target.value
    console.log(event.target.value)
  
  }

  studentAttr() {
    var name = "";
    var sname = "";

  }
 
  calculateAge() {
    this.today = new Date();
    this.today
    var valAge = 0;

    valAge = (2018-(19+this.ages.substr(0,2)));
    return (valAge);
  }
 findGender()
 {
   var idg = 0;
   var gdn = "";
   idg = (this.ages.substr(6,1))
   if (idg > 4){
      gdn = "Male"
   }else{
     gdn = "Female"
   }
   return gdn;
 }
 dateOfBirth()
 {
   var dob = "";
   var day;
   var month;
   day = (this.ages.substr(4,2))
   month = (this.ages.substr(2,2))
  return dob = day + "-" + month + "-" + (19+this.ages.substr(0,2));
 }
nationality()
{
  var nid = (this.ages.substr(10,1));
  var natio;
  if(nid == 0)
  {
    natio = "South African"
  }else{
    natio = "Non-South African"
  }
  return natio;
}

}
