import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './form/cliente-form.component';
import { ClienteListComponent } from './list/cliente-list.component';

const routes: Routes = [
	{
		path: '',
		component: ClienteListComponent
	},
  {
		path: 'novo',
		component: ClienteFormComponent
	},
  {
		path: 'editar/:id',
		component: ClienteFormComponent
	},
  {
		path: 'visualizar/:id',
		component: ClienteFormComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
