import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
	{
		path: 'clientes',
		loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
	},
  //   {
	// 	path: 'quartos',
	// 	loadChildren: () => import('./components/quarto/quarto.module').then(m => m.QuartoModule)
	// },
	// {
	// 	path: 'movimentacao',
	// 	loadChildren: () => import('./components/movimentacao/movimentacao.module').then(m => m.MovimentacaoModule)
	// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
