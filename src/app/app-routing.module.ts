import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Main/home/page/home.component";
import {CriarTopicoComponent} from "./Main/discussion/components/criar-topico/criar-topico.component";
import {TopicoInputComponent} from "./Main/discussion/components/topico-input/topico-input.component";
import {TopicoCriadoComponent} from "./Main/discussion/components/topico-criado/topico-criado.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'home', redirectTo: 'home/criar-topico', pathMatch: 'full'},
      {path: 'criar-topico', component: CriarTopicoComponent},
      {path: 'adicionar-topico', component: TopicoInputComponent},
      {path: 'topico-criado', component: TopicoCriadoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
