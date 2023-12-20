import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './main-components/login-form/login-form.component';
import { MyPageComponent } from './main-components/my-page/my-page.component';
import { HomeComponent } from './main-components/home/home.component';
import { UserSearchComponent } from './main-components/user-search/user-search.component';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "me", component: MyPageComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search-user", component: UserSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
