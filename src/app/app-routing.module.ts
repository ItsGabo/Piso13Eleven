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
import { AlmostfinishComponent } from './components/almostfinish/almostfinish.component';
import { ImportantinformationComponent } from './components/importantinformation/importantinformation.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { SubscriptioncancelComponent } from './components/subscriptioncancel/subscriptioncancel.component';
import { PaymenthistoryComponent } from './components/paymenthistory/paymenthistory.component';
import { RegisteredmailsComponent } from './components/registeredmails/registeredmails.component';
import { DnsconsultComponent } from './components/dnsconsult/dnsconsult.component';
import { AddanalyticscodeComponent } from './components/addanalyticscode/addanalyticscode.component';
import { ChangesrequestComponent } from './components/changesrequest/changesrequest.component';
import { UploadarticleComponent } from './components/uploadarticle/uploadarticle.component';
import { NeedotheremailComponent } from './components/needotheremail/needotheremail.component';
import { OnlineconsultingComponent } from './components/onlineconsulting/onlineconsulting.component';
import { DoubleauthfactorComponent } from './components/doubleauthfactor/doubleauthfactor.component';
import { ForgottenpaswordComponent } from './components/forgottenpasword/forgottenpasword.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [

  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'captcha', component: RecaptchaModule
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'newpassword', component: NewpasswordComponent
  },
  {
    path: 'forgottenpassword', component: ForgottenpaswordComponent
  },
  {
    path: 'doubleauthfactor', component: DoubleauthfactorComponent
  },
  {
    path: 'onlineconsulting', component: OnlineconsultingComponent
  },
  {
    path: 'needotheremail', component: NeedotheremailComponent
  },
  {
    path: 'uploadarticle', component: UploadarticleComponent
  },
  {
    path: 'changerequest', component: ChangesrequestComponent
  },
  {
    path: 'addanalytcscode', component: AddanalyticscodeComponent
  },
  {
    path: 'registeredmails', component: RegisteredmailsComponent
  },
  {
    path: 'dnsconsult', component: DnsconsultComponent
  },
  {
    path: 'editprofile', component: EditprofileComponent
  },
  {
    path: 'paymenthistory', component: PaymenthistoryComponent
  },
  {
    path: 'subscriptioncancel', component: SubscriptioncancelComponent
  },
  {
    path: 'importantinformation', component: ImportantinformationComponent
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
  {
    path: 'almostfinish', component: AlmostfinishComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
