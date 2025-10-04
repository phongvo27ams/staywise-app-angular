import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';

import { DialogService } from 'primeng/dynamicdialog';

import { AvatarComponent } from './avatar/avatar.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    AvatarComponent,
    CategoryComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  location = "Anywhere";
  guests = "Add guests";
  dates = "Any week";

  // login () => this.authService.login();
  // logout () => this.authService.logout();

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
  }

  private fetchMenu() {
    return [
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in",
        styleClass: "font-bold"
      }
    ]
  }
}