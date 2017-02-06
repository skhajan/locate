/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoLocationComponent } from './geo-location.component';

describe('GeoLocationComponent', () => {
  let component: GeoLocationComponent;
  let fixture: ComponentFixture<GeoLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
