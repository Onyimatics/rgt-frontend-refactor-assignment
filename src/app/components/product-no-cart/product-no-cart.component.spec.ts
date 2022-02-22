import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNoCartComponent } from './product-no-cart.component';

describe('ProductNoCartComponent', () => {
  let component: ProductNoCartComponent;
  let fixture: ComponentFixture<ProductNoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
