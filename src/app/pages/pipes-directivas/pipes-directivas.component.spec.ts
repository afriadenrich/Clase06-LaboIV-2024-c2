import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDirectivasComponent } from './pipes-directivas.component';

describe('PipesDirectivasComponent', () => {
  let component: PipesDirectivasComponent;
  let fixture: ComponentFixture<PipesDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesDirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
