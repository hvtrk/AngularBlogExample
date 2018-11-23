import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private _url = 'http://localhost:3000';

  contact(email, name, message) {
    const conData = {
      email: email,
      name: name,
      message: message
    };
    this.http.post(`${this._url}/contact`, conData)
      .subscribe(res => console.log('Contacted Sucessfully'));
  }
  constructor(private http: HttpClient) { }
}
