import { Injectable } from '@angular/core'
import { Http } from "@angular/http"
import "rxjs/add/operator/toPromise"
import { Subject } from "rxjs/Rx";

import { MatSnackBar } from '@angular/material'

@Injectable()
export class WebService {
  BASE_URL: string = 'http://localhost:5000/api'

  private messageStore: Array<any> = []
  private messageSubject = new Subject()
  messages = this.messageSubject.asObservable()

  constructor(private http: Http, private snackBar: MatSnackBar) {}

  getMessages(user) {
    user = (user) ? `/${user}` : ''
    this.http.get(`${this.BASE_URL}/messages${user}`).subscribe(response => {
      this.messageStore = response.json()
      this.messageSubject.next(this.messageStore)
    }, error => {
      this.errorHandler("Unable to get messages from server")
    })
  }

  async postMessages(message) {
    this.http.post(`${this.BASE_URL}/messages`, message).subscribe(response => {
      this.messageStore.push(response.json())
      this.messageSubject.next(this.messageStore)
    }, error => {
      this.errorHandler("Unable to post messages to server")
    })
  }

  private errorHandler(error) {
    console.error(error);
    this.snackBar.open(error, 'close', {
      duration: 2000
    });
  }

}
