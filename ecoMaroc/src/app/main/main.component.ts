import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomSidenavComponent } from '../components/custom-sidenav/custom-sidenav.component';
import { AngularMaterialAppModule } from '../modulesShared/angular-material-app/angular-material-app.module';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CustomSidenavComponent,AngularMaterialAppModule,TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private translate: TranslateService,private router:Router,private auth:LoginService,private userService : UserService) {
    let savedLang = 'en';
   if (typeof window !== 'undefined') {
    savedLang = localStorage.getItem('lang') || 'en';
   }
   this.translate.setDefaultLang(savedLang);
   this.translate.use(savedLang);
 }

 changeLanguage(lang: string) {
   this.translate.use(lang);
   localStorage.setItem('lang', lang);
 }
 collapsed = signal(false);
 sidenavWidth = computed(() => this.collapsed() ? '65px' : '220px');
 onLogout(): void {
  localStorage.setItem('auth', 'false');
  this.auth.logout();
  this.router.navigate(['/login']);
 }
 userTest() {
  this.userService.test().subscribe({
    next: (response) =>  {
      console.log(response);
    },
      error: (e) => console.info('user test error',e) ,
      complete: () => console.info('complete') 
  }
    
  )
 }
}
