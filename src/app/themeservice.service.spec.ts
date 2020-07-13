import { TestBed } from '@angular/core/testing';

import { ThemeserviceService } from './themeservice.service';

describe('ThemeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeserviceService = TestBed.get(ThemeserviceService);
    expect(service).toBeTruthy();
  });
});
