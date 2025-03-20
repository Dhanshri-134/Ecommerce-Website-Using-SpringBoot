import { TestBed } from '@angular/core/testing';

import { UserAuthService } from './user-auth.service';

describe('UserAuthService', () => {
  let service: UserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
