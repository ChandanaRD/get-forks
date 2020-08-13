import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkLayoutComponent } from './fork-layout.component';

describe('ForkLayoutComponent', () => {
  let component: ForkLayoutComponent;
  let fixture: ComponentFixture<ForkLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
