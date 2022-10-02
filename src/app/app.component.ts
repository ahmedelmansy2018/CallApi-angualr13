import { Component } from '@angular/core';
import { ServApiService } from 'src/app/Services/serv-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor(public ServApiService: ServApiService) {}
}
