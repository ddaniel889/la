
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/lawyers/login/login.component';
import { RegisterComponent  } from './pages/lawyers/register/register.component';
import { LegalNoticesComponent  } from './pages/lawyers/legal-notices/legal-notices.component';
import {TutorialComponent } from './pages/lawyers/tutorial/tutorial.component';
import {BenefitsComponent } from './pages/lawyers/benefits/benefits.component';
import {OptionsComponent } from './pages/lawyers/options/options.component';
import {RegisterFormComponent } from './pages/lawyers/register-form/register-form.component';
import {ProfileComponent } from './pages/lawyers/profile/profile.component';
/*  admin    */
import {PanelComponent } from './pages/admin/panel/panel.component';
import {ManageComponent } from './pages/admin/manage/manage.component';
import { UserCasesComponent } from './pages/admin/user-cases/user-cases.component';
import { ContentComponent } from './pages/admin/content/content.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'terms', component: LegalNoticesComponent },
  { path: 'tutorial', component: TutorialComponent  },
  { path: 'benefits', component: BenefitsComponent  },
  { path: 'options', component: OptionsComponent  },
  { path: 'form', component: RegisterFormComponent  },
  { path: 'profile', component: ProfileComponent  },
   /*  Admin          */
  { path: 'panel', component: PanelComponent },
  { path: 'manage-users', component:ManageComponent },
  { path: 'user-cases', component:UserCasesComponent  },
  { path: 'content', component:ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

