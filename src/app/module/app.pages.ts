import {AppComponent} from "../app.component";
import {HeaderComponent} from "../Main/header/page/header.component";
import {NavegacaoComponent} from "../Main/nav/navegacao/navegacao.component";
import {FooterComponent} from "../Main/footer/page/footer.component";
import {DiscussaoComponent} from "../Main/discussion/page/discussao.component";
import {HomeComponent} from "../Main/home/page/home.component";
import {ArtigoComponent} from "../Main/article/page/artigo.component";
import {CriarTopicoComponent} from "../Main/discussion/components/criar-topico/criar-topico.component";
import {TopicoInputComponent} from "../Main/discussion/components/topico-input/topico-input.component";
import {TopicoCriadoComponent} from "../Main/discussion/components/topico-criado/topico-criado.component";
import {ComentariosComponent} from "../Main/discussion/components/comentarios/comentarios.component";

export const PAGES: any[] = [
  AppComponent,
  HeaderComponent,
  NavegacaoComponent,
  FooterComponent,
  DiscussaoComponent,
  HomeComponent,
  ArtigoComponent,
  CriarTopicoComponent,
  TopicoInputComponent,
  TopicoCriadoComponent,
  ComentariosComponent,
]
