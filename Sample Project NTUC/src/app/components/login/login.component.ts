import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RestService } from '@app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private restService: RestService) { }
  loginForm = {
    username: "",
    password: ""
  };
  user;
  loginError;
  ngOnInit() {
    sessionStorage.removeItem("user");
  }
  login() {
    this.restService.login(this.loginForm).subscribe((response: any) => {
      this.loginForm = response;
      if (response.status == 200 && response.body.username) {
        this.user = response.body;
        let valueJson = JSON.stringify({"username": this.user.username, "role": this.user.role});
        sessionStorage.setItem("user", valueJson);
        this.router.navigate(['/home']);
      }
      else {
        this.loginError = "Username or Password doesn't look right.Check it and try again";
      }
    }, (error: any) => {
      this.loginError = "Username or Password doesn't look right.Check it and try again";
    });

  }

}
