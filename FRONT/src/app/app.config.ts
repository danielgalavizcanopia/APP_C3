import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import AppTheme from './theme/app.theme';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SERVICE_PROVIDERS } from '../service/services.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    SERVICE_PROVIDERS,
    provideAnimationsAsync(), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: AppTheme,
        options: {
          darkModeSelector: false || 'none'
        }
      },

    })
  ]
};
