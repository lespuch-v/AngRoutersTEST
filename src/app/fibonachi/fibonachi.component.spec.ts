import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonachiComponent } from './fibonachi.component';

describe('FibonachiComponent', () => {
  let component: FibonachiComponent;
  let fixture: ComponentFixture<FibonachiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonachiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
