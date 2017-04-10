/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComboService } from './combo.service';

describe('ComboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComboService]
    });
  });

  it('should ...', inject([ComboService], (service: ComboService) => {
    expect(service).toBeTruthy();
  }));
});
