import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  element!: HTMLScriptElement;

  constructor() { }

  ngOnInit(): void {
    this.element = document.createElement('script');
    this.element.src = "assets/scripts/particles.js";
    document.body.appendChild(this.element);
  }

}
