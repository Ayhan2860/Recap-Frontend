import { TestBed } from '@angular/core/testing';

import { CarImageService} from './car-image-service.service';

describe('CarImageServiceService', () => {
  let service: CarImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
