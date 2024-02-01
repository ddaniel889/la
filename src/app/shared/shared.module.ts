import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ConfigTaxesComponent } from './components/config-taxes/config-taxes.component';
import { ConfigPoliciesComponent } from './components/config-policies/config-policies.component';
import { AccountManagersComponent } from './components/account-managers/account-managers.component';
import { BackupComponent } from './components/backup/backup.component';
import { HistoryChangesComponent } from './components/history-changes/history-changes.component';
import { ConfigTermsComponent } from './components/config-terms/config-terms.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FilterChangesComponent } from './components/filter-changes/filter-changes.component';
import { CasesAnaliticsComponent } from './components/cases-analitics/cases-analitics.component';
import { IncomesAnaliticsComponent } from './components/incomes-analitics/incomes-analitics.component';
import { ActiveAnaliticsComponent } from './components/active-analitics/active-analitics.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AdminSidebarComponent,
    ConfigTaxesComponent,
    ConfigPoliciesComponent,
    AccountManagersComponent,
    BackupComponent,
    HistoryChangesComponent,
    ConfigTermsComponent,
    LanguagesComponent,
    FilterChangesComponent,
    CasesAnaliticsComponent,
    IncomesAnaliticsComponent,
    ActiveAnaliticsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    AdminSidebarComponent,
    ConfigTaxesComponent,
    ConfigPoliciesComponent,
    AccountManagersComponent,
    HistoryChangesComponent,
    ConfigTermsComponent,
    BackupComponent,
    LanguagesComponent,
    FilterChangesComponent,
    CasesAnaliticsComponent,
    IncomesAnaliticsComponent,
    ActiveAnaliticsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
