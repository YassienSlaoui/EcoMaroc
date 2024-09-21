import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser,FakeMissingTranslationHandler, TranslateFakeCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_STORE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { AppTranslateLoader } from './services/app-translate-loader';
import { jwtInterceptorInterceptor } from './jwt-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(),
      provideAnimationsAsync(),
      provideHttpClient(),
      { provide: HTTP_INTERCEPTORS, useValue: jwtInterceptorInterceptor, multi: true },
    {
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => new AppTranslateLoader(http),
      deps: [HttpClient]
    },
    {
      provide: TranslateCompiler,
      useClass: TranslateFakeCompiler // Provide TranslateFakeCompiler
    },{
      provide: TranslateParser,
      useClass: TranslateDefaultParser, // Provide TranslateDefaultParser
    },{
      provide: MissingTranslationHandler,
      useClass: FakeMissingTranslationHandler, // Provide MissingTranslationHandler
    },{
      provide: USE_DEFAULT_LANG,
      useValue: 'en' // Set your default language here
    },{
      provide: USE_STORE,
      useValue: true // Enable or disable the store as needed
    },{
      provide: USE_EXTEND,
      useValue: true // Enable or disable extending translations as needed
    },{
      provide: DEFAULT_LANGUAGE,
      useValue: 'en' // Set your default language here
    },
    TranslateService,
    TranslateStore 
  ]
};
