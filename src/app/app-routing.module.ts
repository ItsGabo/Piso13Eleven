import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './components/domain/domain.component';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProductbillingComponent } from './components/productbilling/productbilling.component';
import { RegisterComponent } from './components/register/register.component';
import { SiteidentityComponent } from './components/siteidentity/siteidentity.component';
import { DemoComponent } from './components/demo/demo.component';
import { CorrectinformationComponent } from './components/correctinformation/correctinformation.component';
import { CompanycontactComponent } from './components/companycontact/companycontact.component';
import { SocialnetworkComponent } from './components/socialnetwork/socialnetwork.component';


const routes: Routes = [

  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'mainpage', component: MainpageComponent
  },

  {
    path: 'productbilling', component: ProductbillingComponent
  },
  {
    path: 'domain', component: DomainComponent
  },
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: 'correctinformation', component: CorrectinformationComponent
  },
  {
    path: 'siteidentity', component: SiteidentityComponent
  },
  {
    path: 'companycontact', component: CompanycontactComponent
  },
  {
    path: 'socialnetwork', component: SocialnetworkComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
