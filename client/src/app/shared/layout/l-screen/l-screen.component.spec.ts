import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LScreenComponent } from './l-screen.component';

describe('LScreenComponent', () => {
  let component: LScreenComponent;
  let fixture: ComponentFixture<LScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
