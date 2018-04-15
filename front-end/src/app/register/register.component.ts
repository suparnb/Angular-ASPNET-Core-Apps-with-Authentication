import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailVaidation()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchingFields('password', 'confirmPassword') })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.auth.register(this.form.value)
    }
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return {
          mismatchField: true
        }
      }
    }
  }

  emailVaidation() {
    return control => {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(control.value) ? null : { invalidEmail: true }
    }
  }

}
