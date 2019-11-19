import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';


const routes: Routes = [
    { path: 'linea', component: LineaComponent },
    { path: 'barras', component: BarrasComponent },
    { path: 'donas', component: DonasComponent },
    { path: 'radar', component: RadarComponent },
    { path: '', pathMatch: 'full', redirectTo: 'linea' },
    { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }