import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IAppState, INITIAL_STATE } from 'src/redux/store';
import { rootReducer } from 'src/redux/reducer';
import { createLogger } from 'redux-logger';
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from '@angular-redux/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestOnboardingComponent } from './test-onboarding/test-onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { TokenInterceptor } from './helpers/token.interceptor';
import { AuthGuard } from './services/guards/auth.guard';
import { GameScreenLoaderComponent } from './shared/components/game-screen-loader/game-screen-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestOnboardingComponent,
    GameScreenLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgMaterialModule,
    NgReduxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    // let enhancers = isDevMode() ? [devTools.enhancer()] : []
    let enhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger()],
      enhancers
    );
  }
}
