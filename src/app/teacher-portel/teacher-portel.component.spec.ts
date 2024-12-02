import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPortelComponent } from './teacher-portel.component';

describe('TeacherPortelComponent', () => {
  let component: TeacherPortelComponent;
  let fixture: ComponentFixture<TeacherPortelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPortelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherPortelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
