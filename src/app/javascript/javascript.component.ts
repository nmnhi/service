import { EnrollService } from './../Services/enroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService],
})
export class JavascriptComponent implements OnInit {
  title = 'Javascripts';
  constructor(private enrollService: EnrollService) {}

  ngOnInit(): void {}

  OnEnroll() {
    this.enrollService.OnEnrollClick(this.title);
  }
}
