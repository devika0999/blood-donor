import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})
export class DonorlistComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()

   }

   fetchData=()=>{
    this.myapi.viewDonor().subscribe(
      (data)=>{
        this.donorList=data
      }
    )
   }



  donorList:any=[]

  ngOnInit(): void {
  }

}
