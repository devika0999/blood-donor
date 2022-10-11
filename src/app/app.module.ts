import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule, Routes } from '@angular/router';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AddComponent
  },
  {
    path:"search",component:SearchComponent

  },
  {
    path:"delete",component:DeleteComponent
  },
  {
    path:"view",component:DonorlistComponent
  }
]
  @NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavbarComponent,
    SearchComponent,
    DeleteComponent,
    DonorlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
