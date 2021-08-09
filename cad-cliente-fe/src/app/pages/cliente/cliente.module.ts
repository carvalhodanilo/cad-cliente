import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './form/cliente-form.component';
import { ClienteListComponent } from './list/cliente-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
		ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
		ClienteListComponent,
		ClienteFormComponent
	]
})
export class ClienteModule { }
