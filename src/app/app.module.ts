import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule, CardModule, SidebarModule, FormModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { DropdownModule, ProgressModule, SharedModule, WidgetModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IssuedDocsTableComponent } from './components/issued-docs-table/issued-docs-table.component';
import { InvoiceResumeService } from './services/invoice-resume.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeBillingFormComponent } from './components/fe-billing-form/fe-billing-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BranchesWithoutContractComponent } from './components/branches-without-contract/branches-without-contract.component';
import { RequiredInvoicesComponent } from './components/required-invoices/required-invoices.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContractFormComponent } from './components/contract-form/contract-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './common/interceptor/loading.interceptor';
import { FileDownloadTableComponent } from './components/file-download-table/file-download-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'file-download', component: FileDownloadTableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'no-contract', component: BranchesWithoutContractComponent},
  {path: 'issued', component: IssuedDocsTableComponent},
  {path: 'fe-bill', component: FeBillingFormComponent},
  {path: 'contract/:id', component: ContractFormComponent},
  {path: 'home', component: SideBarComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BranchesWithoutContractComponent,
    ContractFormComponent,
    FeBillingFormComponent,
    FileDownloadTableComponent,
    IssuedDocsTableComponent,
    MainPageComponent,
    NotFoundComponent,
    RequiredInvoicesComponent,
    SideBarComponent,
    SpinnerComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    IconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    CardModule,
    SidebarModule,
    DropdownModule,
    ProgressModule,
    SharedModule,
    WidgetModule,
    ChartjsModule,
    TableModule,
    UtilitiesModule,
    FormModule,
    NoopAnimationsModule,
    MatRadioModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  },
  IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
