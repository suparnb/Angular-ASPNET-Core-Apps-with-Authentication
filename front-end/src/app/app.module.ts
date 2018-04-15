import { BrowserModule } from '@angular/platform-browser'
import { NgModule, HostListener } from '@angular/core'
import { HttpModule } from "@angular/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from "@angular/router"
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material'

import { WebService } from './web.service'
import { AuthService } from './auth.service'

import { AppComponent } from './app.component'
import { MessagesComponent } from './messages/messages.component'
import { NewMessageComponent } from './new-message/new-message.component'
import { NavComponent } from './nav/nav.component'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'

const routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'register',
  component: RegisterComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
