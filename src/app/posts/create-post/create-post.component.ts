import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../post-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  savePost(Email, name, postHead, postMessage) {
    console.log(Email, name, postHead, postMessage);
    this.ps.postIt(Email, name, postHead, postMessage);
    this.router.navigate(['posts']);
  }
  constructor(private ps: PostDetailsService, private router: Router) {}

  ngOnInit() {}
}
