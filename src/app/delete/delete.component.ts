import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  id=""

  deleteValues=()=>{
    let data={
      "id":this.id
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
