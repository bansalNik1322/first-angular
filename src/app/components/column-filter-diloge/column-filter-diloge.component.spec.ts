import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFilterDilogeComponent } from './column-filter-diloge.component';

describe('ColumnFilterDilogeComponent', () => {
  let component: ColumnFilterDilogeComponent;
  let fixture: ComponentFixture<ColumnFilterDilogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnFilterDilogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnFilterDilogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
