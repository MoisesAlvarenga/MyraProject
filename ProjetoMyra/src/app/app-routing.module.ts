import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { AuthGuard } from './login-screen/auth.guard';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [{ path: 'login', component: LoginScreenComponent},
{path: '', component: DashboardMenuComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
