
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
import { StartComponent } from './pages/lawyers/start/start.component';
import { SetScheduleComponent } from './pages/lawyers/set-schedule/set-schedule.component';
import { VacanciesComponent } from './pages/lawyers/vacancies/vacancies.component';
import { DatesComponent } from './pages/lawyers/dates/dates.component';
import { MessagesComponent } from './pages/lawyers/messages/messages.component';
import { CalendarComponent } from './pages/lawyers/calendar/calendar.component';
import { CasesComponent } from './pages/lawyers/cases/cases.component';
import { SentencesComponent } from './pages/lawyers/sentences/sentences.component';
import { NewsComponent } from './pages/lawyers/news/news.component';
import { MainProfileComponent } from './pages/lawyers/main-profile/main-profile.component';
import { VacanciesAvalaibleComponent } from './pages/lawyers/vacancies-avalaible/vacancies-avalaible.component';

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
import { UserMessagesComponent } from './pages/admin/user-messages/user-messages.component';


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
  { path: 'index', component:  StartComponent },
  { path: 'schedule', component: SetScheduleComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'calendar', component: CalendarComponent  },
  { path: 'cases', component: CasesComponent },
  { path: 'sentences', component: SentencesComponent  },
  { path: 'news', component:  NewsComponent  },
  { path: 'main-profile', component:   MainProfileComponent  },
  { path: 'vacancy-avalaible/:id', component: VacanciesAvalaibleComponent  },



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
  { path: 'user-messages', component: UserMessagesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

