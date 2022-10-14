import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  name=""
  bloodGroup=""
  lastDonation=""
  dob=""
  disease=""
  vaccination=""
  pincode=""
  mobile=""
  email=""

  readValues=()=>{
    let data={

      "name":this.name,
      "bloodGroup":this.bloodGroup,
      "lastDonation":this.lastDonation,
      "dob":this.dob,
      "disease":this.disease,
      "vaccination":this.vaccination,
      "pincode":this.pincode,
      "mobile":this.mobile,
      "email":this.email

    }
    console.log(data)
  }




  ngOnInit(): void {
  }

}
