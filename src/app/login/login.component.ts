import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'test' && this.password == 'test'){
     this.router.navigate(["breeds"]);
    }else {
      alert("Invalid credentials");
    }}

}
