import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WebService } from '../web.service'

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  
  constructor(private webSrevice: WebService, private route: ActivatedRoute){}

  ngOnInit(){
    let name = this.route.snapshot.params.name
    this.webSrevice.getMessages(name) 
  }

}
