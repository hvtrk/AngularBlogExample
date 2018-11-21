import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  propDeactive = 'nav-item';
  propActive = 'nav-item active';
  constructor() { }

  ngOnInit() {
  }

}
