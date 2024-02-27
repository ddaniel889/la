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
import { MarketingTableComponent } from './components/marketing-table/marketing-table.component';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CasesTablesComponent } from './components/cases-tables/cases-tables.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ButtonPayComponent } from './components/button-pay/button-pay.component';



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
    ActiveAnaliticsComponent,
    MarketingTableComponent,
    ContentTableComponent,
    PrivacyComponent,
    CasesTablesComponent,
    AdminHeaderComponent,
    ButtonPayComponent
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
    ActiveAnaliticsComponent,
    MarketingTableComponent,
    ContentTableComponent,
    PrivacyComponent,
    CasesTablesComponent,
    ButtonPayComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
