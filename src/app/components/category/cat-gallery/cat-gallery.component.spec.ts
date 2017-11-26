import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGalleryComponent } from './cat-gallery.component';

describe('CatGalleryComponent', () => {
  let component: CatGalleryComponent;
  let fixture: ComponentFixture<CatGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
