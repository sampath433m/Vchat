import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartChattingComponent } from './start-chatting.component';

describe('StartChattingComponent', () => {
  let component: StartChattingComponent;
  let fixture: ComponentFixture<StartChattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartChattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartChattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
