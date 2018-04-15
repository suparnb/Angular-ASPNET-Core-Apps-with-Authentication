import { Injectable } from '@angular/core'
import { Http } from "@angular/http"
import { Router } from "@angular/router"

@Injectable()
export class AuthService {
  BASE_URL: string = 'http://localhost:5000/auth'
  NAME_KEY: string = 'name'
  TOKEN_KEY: string  = 'token'

  constructor(private http: Http, private router: Router) { }

  get name(){
    return localStorage.getItem(this.NAME_KEY)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  register(user) {
    delete user.confirmPassword
    this.http.post(`${this.BASE_URL}/register`, user).subscribe(res => {

      let authResponse = res.json()
      if(!authResponse) return

      localStorage.setItem(this.TOKEN_KEY, authResponse.token)
      localStorage.setItem(this.NAME_KEY, authResponse.firstName)
      this.router.navigate(['/'])
    })
  }

  logout(){
    localStorage.removeItem(this.NAME_KEY)
    localStorage.removeItem(this.TOKEN_KEY)
  }
}
