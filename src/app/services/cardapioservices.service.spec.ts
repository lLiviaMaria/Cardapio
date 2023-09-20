import { TestBed } from '@angular/core/testing';

import { CardapioservicesService } from './cardapioservices.service';

describe('CardapioservicesService', () => {
  let service: CardapioservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
