import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './main-components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPageComponent } from './main-components/my-page/my-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    NavBarComponent,
    LoginFormComponent,
    MyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
