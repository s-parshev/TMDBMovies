import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsOnlyPageComponent } from './films-only-page.component';

describe('FilmsOnlyPageComponent', () => {
  let component: FilmsOnlyPageComponent;
  let fixture: ComponentFixture<FilmsOnlyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsOnlyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsOnlyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
