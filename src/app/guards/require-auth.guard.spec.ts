import { TestBed, async, inject } from "@angular/core/testing";

import { RequireAuthGuard } from "./require-auth.guard";

describe("RequireAuthGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAuthGuard]
    });
  });

  it(
    "should ...",
    inject([RequireAuthGuard], (service: RequireAuthGuard) => {
      expect(service).toBeTruthy();
    })
  );
});

///////////// different than cheatsheet line 14 and 15
