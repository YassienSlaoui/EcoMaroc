import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialAppModule } from '../modulesShared/angular-material-app/angular-material-app.module';
import { LoginService } from '../services/login.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AngularMaterialAppModule,TranslateModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl(''),
  });;
  error: string | null = null;

  constructor(private fb: FormBuilder,private loginService:LoginService,private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  onLogin() {
    if (this.loginForm?.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginService.onLogin(username,password).subscribe({
            next: (response) =>  {
                this.loginService.setToken(response);
                localStorage.setItem('auth','true');
                this.router.navigate(['dashboard']); // Redirect to dashboard or other page
              },
            error: (e) => {console.error('Login failed', e);
                            localStorage.setItem('auth','false');},
            complete: () => console.info('complete') 
        });
    
    }
}
}
