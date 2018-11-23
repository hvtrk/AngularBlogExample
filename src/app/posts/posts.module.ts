import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostDetailsService } from './post-details.service';

@NgModule({
  declarations: [
    PostsComponent,
    EditPostComponent,
    CreatePostComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostDetailsService]
})
export class PostsModule {}
