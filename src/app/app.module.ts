import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/lawyers/login/login.component';
import { RegisterComponent } from './pages/lawyers/register/register.component';
import { LegalNoticesComponent } from './pages/lawyers/legal-notices/legal-notices.component';
import { OptionsComponent } from './pages/lawyers/options/options.component';
import { TutorialComponent } from './pages/lawyers/tutorial/tutorial.component';
import { BenefitsComponent } from './pages/lawyers/benefits/benefits.component';
import { RegisterFormComponent } from './pages/lawyers/register-form/register-form.component';
import { SetScheduleComponent } from './pages/lawyers/set-schedule/set-schedule.component';
import { VacanciesComponent } from './pages/lawyers/vacancies/vacancies.component';
import { DatesComponent } from './pages/lawyers/dates/dates.component';
import { MessagesComponent } from './pages/lawyers/messages/messages.component';
import { CalendarComponent } from './pages/lawyers/calendar/calendar.component';
import { CasesComponent } from './pages/lawyers/cases/cases.component';
import { SentencesComponent } from './pages/lawyers/sentences/sentences.component';
import { ProfileComponent } from './pages/lawyers/profile/profile.component';
import { NewsComponent } from './pages/lawyers/news/news.component';
import { PaymentsComponent } from './pages/lawyers/payments/payments.component';
import { LegalsComponent } from './pages/client/legals/legals.component';
import { PanelComponent } from './pages/admin/panel/panel.component';
import { ManageComponent } from './pages/admin/manage/manage.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { MarketingComponent } from './pages/admin/marketing/marketing.component';
import { AnaliticsComponent } from './pages/admin/analitics/analitics.component';
import { ReportsComponent } from './pages/admin/reports/reports.component';
import { ConfigurationsComponent } from './pages/admin/configurations/configurations.component';
import { ClientSupportComponent } from './pages/admin/client-support/client-support.component';
import { AccountComponent } from './pages/admin/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Material*/
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from './shared/shared.module';
import { FilterUsersComponent } from './pages/admin/filter-users/filter-users.component';
import { UserCasesComponent } from './pages/admin/user-cases/user-cases.component';
import { FilterCasesComponent } from './pages/admin/filter-cases/filter-cases.component';
import { NewsFiltersComponent } from './pages/admin/news-filters/news-filters.component';
import { CampaignFilterComponent } from './pages/admin/campaign-filter/campaign-filter.component';
import { AdminPaymentsComponent } from './pages/admin/admin-payments/admin-payments.component';
import { SetSupportComponent } from './pages/admin/set-support/set-support.component';
import { AssignTicketComponent } from './pages/admin/assign-ticket/assign-ticket.component';
import { DataTypeComponent } from './pages/admin/data-type/data-type.component';
import { DownloadsComponent } from './pages/admin/downloads/downloads.component';
import { FilterChangesComponent } from './pages/admin/filter-changes/filter-changes.component';
import { ManagerDetailComponent } from './pages/admin/manager-detail/manager-detail.component';
import { CreateCamapaignComponent } from './pages/admin/create-camapaign/create-camapaign.component';
import { ActiveCampaingnComponent } from './pages/admin/active-campaingn/active-campaingn.component';
import { RecoveryComponent } from './pages/lawyers/recovery/recovery.component';
import { RegisterStepComponent } from './pages/lawyers/register-step/register-step.component';
import { RegisterSecondComponent } from './pages/lawyers/register-second/register-second.component';
import { RegisterFourComponent } from './pages/lawyers/register-four/register-four.component';
import { RegisterFiveComponent } from './pages/lawyers/register-five/register-five.component';
import { StartComponent } from './pages/lawyers/start/start.component';
import { UserMessagesComponent } from './pages/admin/user-messages/user-messages.component';
import { SubscriptionsComponent } from './pages/lawyers/subscriptions/subscriptions.component';
import { MainProfileComponent } from './pages/lawyers/main-profile/main-profile.component';
import { VacanciesAvalaibleComponent } from './pages/lawyers/vacancies-avalaible/vacancies-avalaible.component';
import { SentModalComponent } from './pages/lawyers/sent-modal/sent-modal.component';
import { NewCasesComponent } from './pages/lawyers/new-cases/new-cases.component';
import { DoPaymentsComponent } from './pages/lawyers/do-payments/do-payments.component';
import { HistoryActivitiesComponent } from './pages/lawyers/history-activities/history-activities.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { CancelDatingComponent } from './pages/lawyers/cancel-dating/cancel-dating.component';
import { DatingDetailsComponent } from './pages/lawyers/dating-details/dating-details.component';
import { EditDatingComponent } from './pages/lawyers/edit-dating/edit-dating.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LegalNoticesComponent,
    OptionsComponent,
    TutorialComponent,
    BenefitsComponent,
    RegisterFormComponent,
    SetScheduleComponent,
    VacanciesComponent,
    DatesComponent,
    MessagesComponent,
    CalendarComponent,
    CasesComponent,
    SentencesComponent,
    ProfileComponent,
    NewsComponent,
    PaymentsComponent,
    LegalsComponent,
    PanelComponent,
    ManageComponent,
    ContentComponent,
    MarketingComponent,
    AnaliticsComponent,
    ReportsComponent,
    ConfigurationsComponent,
    ClientSupportComponent,
    AccountComponent,
    FilterUsersComponent,
    UserCasesComponent,
    FilterCasesComponent,
    NewsFiltersComponent,
    CampaignFilterComponent,
    AdminPaymentsComponent,
    SetSupportComponent,
    AssignTicketComponent,
    DataTypeComponent,
    DownloadsComponent,
    FilterChangesComponent,
    ManagerDetailComponent,
    CreateCamapaignComponent,
    ActiveCampaingnComponent,
    RecoveryComponent,
    RegisterStepComponent,
    RegisterSecondComponent,
    RegisterFourComponent,
    RegisterFiveComponent,
    StartComponent,
    UserMessagesComponent,
    SubscriptionsComponent,
    MainProfileComponent,
    VacanciesAvalaibleComponent,
    SentModalComponent,
    NewCasesComponent,
    DoPaymentsComponent,
    HistoryActivitiesComponent,
    CancelDatingComponent,
    DatingDetailsComponent,
    EditDatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    NgxPayPalModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
