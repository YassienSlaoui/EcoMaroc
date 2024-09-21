import { Component, Input, computed, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
export type MenuItem = {
  icon: string ;
  label :string;
  rout :string;
}
@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatListModule,RouterModule,TranslateModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  constructor (private translate: TranslateService){
  } 
  sideNavCollapsed = signal(false);
  @Input() set collapsed (val:boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
      {
        icon : 'dashboard',
        label : 'dashboard',
        rout : 'dashboard'
      },
      {
        icon : 'video_library',
        label : 'content',
        rout : 'content'
      }
  ]);
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
