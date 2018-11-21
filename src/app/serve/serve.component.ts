import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
  propDeactive = 'nav-item';
  propActive = 'nav-item active';
  constructor() {}

  ngOnInit() {}
}
