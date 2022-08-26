import { Component, OnInit } from '@angular/core';
import {Posts} from '../../models/posts.model';
import {PostsService} from '../../services/posts.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {


  post : Posts= {
    title: "",
  };
  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  savePost() {
    this.postService.savePost(this.post).then(res => {
      this.router.navigate(['/post']);
    }).catch(err => {
      console.log(err)
    })
    
  }

}
