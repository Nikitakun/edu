import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './modules/app/app.module';

import './assets/scss/index.scss';
// import './assets/custom-bootstrap-theme/bootstrap.css';

/* tslint:disable */
if (process.env.ENV === 'production') {
    enableProdMode();
}
/* tslint:enable */

platformBrowserDynamic().bootstrapModule(AppModule);
