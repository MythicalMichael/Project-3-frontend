import { TestBed, async, inject } from "@angular/core/testing";

import { RequireAnonGuard } from "./require-anon.guard";

describe("RequireAnonGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAnonGuard]
    });
  });

  it(
    "should ...",
    inject([RequireAnonGuard], (service: RequireAnonGuard) => {
      expect(service).toBeTruthy();
    })
  );
});

//////// different than cheatsheet 15 14
