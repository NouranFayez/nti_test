import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Post {
  title:string;
  content:string;
}

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  post:Post =  {title:"", content:""};; 

  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  onAddPost(){
    const post = {
      title: this.post.title,
      content: this.post.content
    }
    this.postCreated.emit(post);
  }

}
