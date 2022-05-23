import { TestBed } from '@angular/core/testing';

import { EfetivarCompraService } from './efetivar-compra.service';

describe('EfetivarCompraService', () => {
  let service: EfetivarCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfetivarCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
