import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Main/home/page/home.component";


const routes: Routes = [
  {path: '', redirectTo: 'trabalhos', pathMatch: 'full'},
  {path: 'trabalhos', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
