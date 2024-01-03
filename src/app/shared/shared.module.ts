import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    AdminSidebarComponent
  ],
})
export class SharedModule { }
