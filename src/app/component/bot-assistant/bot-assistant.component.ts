import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-assistant',
  templateUrl: './bot-assistant.component.html',
  styleUrls: ['./bot-assistant.component.css']
})
export class BotAssistantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = false;
  userInput = '';

  toggleBot() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    console.log('User says:', this.userInput);
    this.userInput = '';
  }

}
