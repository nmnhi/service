import { EnrollService } from './Services/enroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EnrollService],
})
export class AppComponent {
  title = 'subscribeservice';
  constructor(private enrollService: EnrollService) {}
}
