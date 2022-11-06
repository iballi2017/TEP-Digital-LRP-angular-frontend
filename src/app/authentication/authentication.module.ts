import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountEmailComponent } from './views/forgot-password/account-email/account-email.component';
import { SharedModule } from '../shared/shared.module';
import { VerifyEmailCodeComponent } from './views/forgot-password/verify-email-code/verify-email-code.component';
import { UpdatePasswordComponent } from './views/forgot-password/update-password/update-password.component';
import { PasswordChangeSuccessMessageComponent } from './views/forgot-password/password-change-success-message/password-change-success-message.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AccountEmailComponent,
    VerifyEmailCodeComponent,
    UpdatePasswordComponent,
    PasswordChangeSuccessMessageComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthenticationModule {}
