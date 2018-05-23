import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOpinionsComponent } from './item-opinions.component';

describe('ItemOpinionsComponent', () => {
  let component: ItemOpinionsComponent;
  let fixture: ComponentFixture<ItemOpinionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOpinionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
