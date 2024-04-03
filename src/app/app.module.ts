import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PAGES} from "./module/app.pages";
import {IMPORTS} from "./module/app.imports";
import {PROVIDERS} from "./module/app.providers";
import { ArtigoComponent } from './Main/article/page/artigo.component';
import { CriarTopicoComponent } from './Main/discussion/criar-topico/criar-topico.component';
import { TopicoInputComponent } from './Main/discussion/topico-input/topico-input.component';
import { TopicoCriadoComponent } from './Main/discussion/topico-criado/topico-criado.component';
import { ComentariosComponent } from './Main/discussion/comentarios/comentarios.component';

@NgModule({
  declarations: [...PAGES, ArtigoComponent, CriarTopicoComponent, TopicoInputComponent, TopicoCriadoComponent, ComentariosComponent],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
