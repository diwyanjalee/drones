import { TestBed } from '@angular/core/testing';

import { AddPostsService } from './add-posts.service';

describe('AddPostsService', () => {
  let service: AddPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
