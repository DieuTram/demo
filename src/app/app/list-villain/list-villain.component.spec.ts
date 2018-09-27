import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVillainComponent } from './list-villain.component';

describe('ListVillainComponent', () => {
  let component: ListVillainComponent;
  let fixture: ComponentFixture<ListVillainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVillainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
