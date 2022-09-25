import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/_models/login';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Objeto que vem com as informações do front.
  login = new Login();

  //Objeto que vem com as informações do backEnd com login cadastrado.
  loginAuth = new Login();

  loginValidator = this.formBuilder.group({
    user: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}


  //Função que verifica se ologin está correto e retorna TRUE no route Guard
  onSubmit() {
    try {
      this.loginService.login().subscribe((res: Login) => {
        this.loginAuth = res;

        if (
          this.login.password == this.loginAuth.password &&
          this.login.user == this.loginAuth.user
        ) {
          window.localStorage.setItem('login', JSON.stringify(this.loginAuth));
          this.router.navigate(['']);
        } else {
          window.alert('Login ou senha inválido.');
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
