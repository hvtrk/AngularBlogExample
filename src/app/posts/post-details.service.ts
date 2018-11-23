import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {
  private _url = 'http://localhost:3000';
  private id;
  postIt(Email, name, postHead, postMessage) {
    console.log();
    this.http.post(`${this._url}/postIt`, {
      name: name,
      email: Email,
      postHead: postHead,
      postMessage: postMessage
    }).subscribe(res => console.log('Posted')
    );
  }

  view() {
    return this.http.get(`${this._url}/getPost`);
  }

  srch(val) {
    return this.http.get(`${this._url}/getPost/${val}`);
  }

  del(id) {
    return this.http.get(`${this._url}/deletePost/${id}`).subscribe(res => console.log('Deleted'));
  }

  viewEdit(id) {
    return this.http.get(`${this._url}/editPost/get/${id}`);
  }

  updateEdit(id, Email, name, postHead, postMessage) {

    this.http
      .post(`${this._url}/editPost/update/${id}`, {
        name: name,
        email: Email,
        postHead: postHead,
        postMessage: postMessage
      })
      .subscribe(res => console.log('Updated'));
  }

  constructor(private http: HttpClient) {}
}
