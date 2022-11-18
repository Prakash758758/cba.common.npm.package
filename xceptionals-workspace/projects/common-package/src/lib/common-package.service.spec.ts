import { TestBed } from '@angular/core/testing';

import { CommonPackageService } from './common-package.service';

describe('CommonPackageService', () => {
  let service: CommonPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
