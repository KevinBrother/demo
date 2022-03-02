import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdModalComponent } from './antd-modal.component';

describe('AntdModalComponent', () => {
  let component: AntdModalComponent;
  let fixture: ComponentFixture<AntdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntdModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
