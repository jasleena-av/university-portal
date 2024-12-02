import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPortelComponent } from './parent-portel.component';

describe('ParentPortelComponent', () => {
  let component: ParentPortelComponent;
  let fixture: ComponentFixture<ParentPortelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPortelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentPortelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
