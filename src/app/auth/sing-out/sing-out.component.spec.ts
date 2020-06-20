import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingOutComponent } from './sing-out.component';

describe('SingOutComponent', () => {
  let component: SingOutComponent;
  let fixture: ComponentFixture<SingOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
