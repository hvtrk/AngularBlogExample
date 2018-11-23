import { TestBed } from '@angular/core/testing';

import { PostDetailsService } from './post-details.service';

describe('PostDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDetailsService = TestBed.get(PostDetailsService);
    expect(service).toBeTruthy();
  });
});
