import { Component, OnInit } from '@angular/core'
import { MessagesComponent } from '../messages/messages.component'
import { NavComponent } from '../nav/nav.component'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
