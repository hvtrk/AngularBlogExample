import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../post-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModal } from '../Modal/post-modal';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  edit: PostModal[];


  id: any;
  saveIt(name, email, postMessage, postHead)  {
    this.ps.updateEdit(this.id, name, email, postMessage, postHead);
    console.log('Edited The Post' + this.edit['postHead']);
    this.router.navigate(['posts']);
  }
  constructor( private ps: PostDetailsService, private route: ActivatedRoute, private router: Router ) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.ps.viewEdit(this.id).subscribe((data: PostModal[]) => {
      this.edit = data;
      // console.log(this.edit['email']);
    });
  }
}
