import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactUsService } from './contact-us.service';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule
  ],
  providers: [ContactUsService]
})
export class ContactModule { }
