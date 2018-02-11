import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './modules/app/app.module';

import './assets/css/styles.css';

/* tslint:disable */
if (process.env.ENV === 'production') {
    enableProdMode();
}
/* tslint:enable */


platformBrowserDynamic().bootstrapModule(AppModule);
