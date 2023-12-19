import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './main-components/login-form/login-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MyPageComponent } from './main-components/my-page/my-page.component';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "me", component: MyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
