import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmbdbPdf } from './ngx-embdb-pdf';

describe('NgxEmbdbPdf', () => {
  let component: NgxEmbdbPdf;
  let fixture: ComponentFixture<NgxEmbdbPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEmbdbPdf],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxEmbdbPdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
