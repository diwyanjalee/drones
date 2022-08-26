import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import * as firebase from 'firebase/app';
import 'firebase/database';

import { Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private dbPath = '/post';

  postRef: AngularFireList<Posts>;

  constructor( public db: AngularFireDatabase,) { 
    this.postRef = db.list(this.dbPath);
  }

  savePost(post: Posts) :Promise<any> {
    return this.postRef.push(post).then((res) => {
      return res;
    });
  }
}
