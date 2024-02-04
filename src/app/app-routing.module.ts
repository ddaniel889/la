
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
import { RecoveryComponent } from './pages/lawyers/recovery/recovery.component';
import { RegisterStepComponent } from './pages/lawyers/register-step/register-step.component';
import { RegisterSecondComponent } from './pages/lawyers/register-second/register-second.component';
import { RegisterFourComponent } from './pages/lawyers/register-four/register-four.component';
import { RegisterFiveComponent } from './pages/lawyers/register-five/register-five.component';
/*  admin    */
import {PanelComponent } from './pages/admin/panel/panel.component';
import {ManageComponent } from './pages/admin/manage/manage.component';
import { UserCasesComponent } from './pages/admin/user-cases/user-cases.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { MarketingComponent } from './pages/admin/marketing/marketing.component';
import { AnaliticsComponent } from './pages/admin/analitics/analitics.component';
import { AdminPaymentsComponent } from './pages/admin/admin-payments/admin-payments.component';
import { ReportsComponent } from './pages/admin/reports/reports.component';
import { ConfigurationsComponent } from './pages/admin/configurations/configurations.component';
import { ClientSupportComponent } from './pages/admin/client-support/client-support.component';
import { AccountComponent } from './pages/admin/account/account.component';
import { ManagerDetailComponent } from './pages/admin/manager-detail/manager-detail.component';


const routes: Routes = [
   /*  Lawyers     */
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'terms', component: LegalNoticesComponent },
  { path: 'tutorial', component: TutorialComponent  },
  { path: 'benefits', component: BenefitsComponent  },
  { path: 'options', component: OptionsComponent  },
  { path: 'form', component: RegisterFormComponent  },
  { path: 'profile', component: ProfileComponent  },
  { path: 'recovery', component: RecoveryComponent  },
  { path: 'register-step/:id', component: RegisterStepComponent},
  { path: 'register-two/:id', component: RegisterSecondComponent },
  { path: 'register-four/:id', component: RegisterFourComponent},
  { path: 'register-five/:id', component: RegisterFiveComponent },
   /*  Admin          */
  { path: 'panel', component: PanelComponent },
  { path: 'manage-users', component:ManageComponent },
  { path: 'user-cases', component:UserCasesComponent  },
  { path: 'content', component:ContentComponent },
  { path: 'marketing', component:MarketingComponent },
  { path: 'analitics', component:AnaliticsComponent },
  { path: 'admin-payments', component:AdminPaymentsComponent },
  { path: 'reports', component:ReportsComponent },
  { path: 'configurations', component:ConfigurationsComponent },
  { path: 'client-support', component:ClientSupportComponent },
  { path: 'account', component:AccountComponent },
  { path: 'manager-detail/:id', component: ManagerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

