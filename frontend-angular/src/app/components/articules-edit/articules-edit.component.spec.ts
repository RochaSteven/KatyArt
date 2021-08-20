import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulesEditComponent } from './articules-edit.component';

describe('ArticulesEditComponent', () => {
  let component: ArticulesEditComponent;
  let fixture: ComponentFixture<ArticulesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
