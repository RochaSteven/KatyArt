import { TestBed } from '@angular/core/testing';

import { ArticulesService } from './articules.service';

describe('ArticulesService', () => {
  let service: ArticulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
