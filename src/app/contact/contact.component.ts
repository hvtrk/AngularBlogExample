import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './contact-us.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  propDeactive = 'nav-item';
  propActive = 'nav-item active';
  constructor(private cs: ContactUsService, private route: Router) {}
  contactUs(email, name, message) {
    this.cs.contact(email, name, message);
    this.route.navigate(['']);
  }
  ngOnInit() {}
}
