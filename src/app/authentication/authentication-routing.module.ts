import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEmailComponent } from './views/forgot-password/account-email/account-email.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { PasswordChangeSuccessMessageComponent } from './views/forgot-password/password-change-success-message/password-change-success-message.component';
import { UpdatePasswordComponent } from './views/forgot-password/update-password/update-password.component';
import { VerifyEmailCodeComponent } from './views/forgot-password/verify-email-code/verify-email-code.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    children:[
      {
        path: '',
        component: AccountEmailComponent
      },
      {
        path: 'account-email',
        component: AccountEmailComponent
      },
      {
        path: 'verify-email-code',
        component: VerifyEmailCodeComponent
      },
      {
        path: 'update-password/:reset_selector/:verification-code',
        component: UpdatePasswordComponent
      },
      {
        path: 'success',
        component: PasswordChangeSuccessMessageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
