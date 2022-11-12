import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'test-onboarding',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./test-onboarding/test-onboarding.module').then(
        (m) => m.TestOnboardingModule
      ),
  },
  {
    path: 'literacy',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./literacy-test/literacy-test.module').then(
        (m) => m.LiteracyTestModule
      ),
  },
  {
    path: 'numeracy',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./numeracy-test/numeracy-test.module').then(
        (m) => m.NumeracyTestModule
      ),
  },
  {
    path: 'practice',
    loadChildren: () =>
      import('./practice/practice.module').then((m) => m.PracticeModule),
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'shared/new-task-loading/:game-level/:stageNumber/:gameType',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shared/shared.module').then((s) => s.SharedModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
