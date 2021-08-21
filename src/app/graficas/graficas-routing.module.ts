import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './pages/agencia/agencia.component';
import { GlobalComponent } from './pages/global/global.component';

const routes: Routes = [
  {
    path:'agencia', component:AgenciaComponent
  },
  {
    path:'global', component:GlobalComponent
  },
  {
    path:'**', redirectTo:'agencia'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
