import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './utils/config/app.routing';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { RestService } from './services/rest.service';
import { HelperService } from './services/helper.service';
import { AppComponent } from './app.component';
import { httpInterceptor } from './utils/config/http-interceptor';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserLayoutComponent } from './components/layout/user-layout/user-layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { PopupComponent } from './utils/components/popup/popup.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaseHeaderComponent } from './components/purchase/purchase-header/purchase-header.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    ViewComponent,
    PopupComponent,
    RegisterUserComponent,
    PurchaseComponent,
    PurchaseHeaderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    // DataTableModule
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [RestService, HelperService,{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

