import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../post-details.service';
import { PostModal } from '../Modal/post-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  constructor(private ps: PostDetailsService, private router: Router) {}
  viewPosts: PostModal;
  deleteIt(id) {
    this.ps.del(id);
    this.router.navigate(['posts']);
  }
  edit(post) {
    this.router.navigate(['posts/edit', post._id]);
  }
  search(val) {
    console.log('Seqarching...' + val);
    this.ps.srch(val).subscribe((data: PostModal) => {
      this.viewPosts = data;
    });
  }

  ngOnInit() {
    this.ps.view().subscribe((data: PostModal) => {
      this.viewPosts = data;
    });
  }
}
