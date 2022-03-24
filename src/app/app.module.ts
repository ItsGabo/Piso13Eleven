import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { ProductbillingComponent } from './components/productbilling/productbilling.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RegisterComponent } from './components/register/register.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    SiteidentityComponent,
    DemoComponent,
    CorrectinformationComponent,
    CompanycontactComponent,
    SocialnetworkComponent,
    AlmostfinishComponent,
    ImportantinformationComponent,
    EditprofileComponent,
    SubscriptioncancelComponent,
    PaymenthistoryComponent,
    RegisteredmailsComponent,
    DnsconsultComponent,
    AddanalyticscodeComponent,
    ChangesrequestComponent,
    UploadarticleComponent,
    NeedotheremailComponent,
    OnlineconsultingComponent,
    DoubleauthfactorComponent,
    ForgottenpaswordComponent,
    NewpasswordComponent,
    DashboardComponent,
    ProductbillingComponent,
    RegisterComponent,
    MainpageComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    NgxPayPalModule,
    RecaptchaModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '722896807994-72mt0bbeeud2fr7b9o1a0nf53f6i603n.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('363533548618742')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
