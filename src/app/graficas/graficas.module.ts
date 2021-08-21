import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { AgenciaComponent } from './pages/agencia/agencia.component';
import { GlobalComponent } from './pages/global/global.component';


@NgModule({
  declarations: [
    AgenciaComponent,
    GlobalComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
