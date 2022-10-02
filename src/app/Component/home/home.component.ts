import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Info:StoreData;
  
  
  constructor() {
  Info:StoreData;  
    this.Info=new StoreData('Ahmed AteF','Full Stack Deveoper',['C#','EF','Linq'])
   }

  ngOnInit(): void {
  }

}
