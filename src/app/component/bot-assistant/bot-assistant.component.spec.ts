import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAssistantComponent } from './bot-assistant.component';

describe('BotAssistantComponent', () => {
  let component: BotAssistantComponent;
  let fixture: ComponentFixture<BotAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
