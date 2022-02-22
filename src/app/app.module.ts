import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteidentityComponent } from './components/siteidentity/siteidentity.component';
import { DemoComponent } from './components/demo/demo.component';
import { CorrectinformationComponent } from './components/correctinformation/correctinformation.component';
import { CompanycontactComponent } from './components/companycontact/companycontact.component';
import { SocialnetworkComponent } from './components/socialnetwork/socialnetwork.component';
import { AlmostfinishComponent } from './components/almostfinish/almostfinish.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteidentityComponent,
    DemoComponent,
    CorrectinformationComponent,
    CompanycontactComponent,
    SocialnetworkComponent,
    AlmostfinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
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
