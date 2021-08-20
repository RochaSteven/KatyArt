import { TestBed } from '@angular/core/testing';

import { ArticuleService } from './articule.service';

describe('ArticuleService', () => {
  let service: ArticuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
