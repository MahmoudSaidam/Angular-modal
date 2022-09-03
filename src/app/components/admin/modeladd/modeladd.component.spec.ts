import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeladdComponent } from './modeladd.component';

describe('ModeladdComponent', () => {
  let component: ModeladdComponent;
  let fixture: ComponentFixture<ModeladdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeladdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
