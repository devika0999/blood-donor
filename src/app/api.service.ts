import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewDonor=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}