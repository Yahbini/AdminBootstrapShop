import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;

  constructor(
    private router:  Router
  ) {

  }

  ngOnInit(): void {
    this.username = '',
    this.password = ''
  }

  login() {
    if(this.username == "admin" && this.password == '123') {
      this.router.navigate(['/admin/dashboard'])
    } else {
      alert("Invalid")
    }
  }
}
