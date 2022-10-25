import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnlyPageComponent } from './show-only-page.component';

describe('ShowOnlyPageComponent', () => {
  let component: ShowOnlyPageComponent;
  let fixture: ComponentFixture<ShowOnlyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOnlyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOnlyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
