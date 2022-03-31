import { TestBed } from '@angular/core/testing';

import { StaticDataSourceService } from './static-data-source.service';

describe('StaticDataSourceService', () => {
  let service: StaticDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
