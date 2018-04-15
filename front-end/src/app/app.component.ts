import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <nav></nav>
      <router-outlet></router-outlet>
    </div>
`,
  styles: [` .app {margin:8px} `]
})
export class AppComponent {

}
