import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PAGES} from "./module/app.pages";
import {IMPORTS} from "./module/app.imports";
import {PROVIDERS} from "./module/app.providers";

@NgModule({
  declarations: [...PAGES],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
