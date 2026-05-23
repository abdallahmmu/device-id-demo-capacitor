import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import '@innovatrics/dot-document-auto-capture';
import '@innovatrics/dot-auto-capture-ui/document';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
