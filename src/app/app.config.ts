import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { tenantReducer } from './admin/tenant/tenant.reducer';
import { TenantEffects } from './admin/tenant/tenant.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule),
    provideStore(), // Postavi globalni Store
    provideState('tenants', tenantReducer), // Osiguraj da je ključ "tenants"
    provideEffects(TenantEffects), // Ako koristiš NgRx Effects, 
    provideStoreDevtools({ 
      maxAge: 25, 
      logOnly: !isDevMode() })]
};
