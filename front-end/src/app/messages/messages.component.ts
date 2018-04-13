import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private webSrevice: WebService){}

  async ngOnInit() {
    let response = await this.webSrevice.getMessages();
    this.messages = response.json();
  }
  messages = [
    {text: 'some text', owner: 'Tony'},
    {text: 'more some text', owner: 'Steve'}
  ]

}
