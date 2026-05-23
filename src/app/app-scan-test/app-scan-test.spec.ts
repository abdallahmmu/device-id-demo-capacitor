import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScanTest } from './app-scan-test';

describe('AppScanTest', () => {
  let component: AppScanTest;
  let fixture: ComponentFixture<AppScanTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScanTest],
    }).compileComponents();

    fixture = TestBed.createComponent(AppScanTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
