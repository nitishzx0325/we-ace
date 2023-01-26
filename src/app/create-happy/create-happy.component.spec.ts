import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHappyComponent } from './create-happy.component';

describe('CreateHappyComponent', () => {
  let component: CreateHappyComponent;
  let fixture: ComponentFixture<CreateHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHappyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
