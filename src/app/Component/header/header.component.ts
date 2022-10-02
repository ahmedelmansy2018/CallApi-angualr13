import { Component, OnInit } from '@angular/core';
import { ServApiService } from 'src/app/Services/serv-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean;
  constructor(public ServApiService: ServApiService) {
    this.isUserLogged=this.ServApiService.isUserLogged;
    console.log(this.isUserLogged);
  }

  ngOnInit(): void {
    this.ServApiService.getloggedStatus().subscribe(status=>{
      this.isUserLogged=status;
      console.log(this.isUserLogged);
    });
  }

}
