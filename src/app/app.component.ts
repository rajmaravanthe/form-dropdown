import { Component } from '@angular/core';

import { ComboService } from './combo.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  combos;
  view;

  constructor(public loginService: LoginService, public comboService: ComboService) {

  }
  ngOnInit() {
    this.combos = this.comboService.dropdown();
  }

  saveData (form) {
    console.log(form.form.value);
    this.view = "I m "+form.form.value.gender+" "+form.form.value.name+" with email "+form.form.value.email
    this.loginService.send(form.form.value);
  }
}
