import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCameraComponent } from './device-camera.component';

describe('DeviceCameraComponent', () => {
  let component: DeviceCameraComponent;
  let fixture: ComponentFixture<DeviceCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
