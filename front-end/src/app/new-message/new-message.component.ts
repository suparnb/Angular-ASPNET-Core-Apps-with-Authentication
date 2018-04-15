import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {

  message = {
    owner: "",
    text: ""
  }

  constructor(private webSrevice: WebService) { }

  post(){
    this.webSrevice.postMessages(this.message)
  }

}
