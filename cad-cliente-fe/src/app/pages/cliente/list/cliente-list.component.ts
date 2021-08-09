import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TableComponent } from 'src/app/shared/material/table/table.component';
import { Cliente } from 'src/app/shared/model/cliente.model';
// import { TableComponent } from 'src/app/shared/material/table/table.component';
// import { Cliente } from 'src/app/shared/models/cliente.model';
// import { ClienteService } from 'src/app/shared/services/cliente.service';

import { mappingUrls } from './../../../shared/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  @ViewChild('searchPersonForm') searchPersonForm!: FormGroup;
  @ViewChild('table') table!: TableComponent;
  form!: FormGroup;
  submitted = false;

  public displayedColumns = ["id", "nome", "cpf"];
  public actions!: any[];
  public service = mappingUrls.clienteService.context;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        nome: ['', []],
        cpf: ['', []]
      });

    this.actions = [{action: 'add', icon: 'person_add_alt_1' }]
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  search(tableRef: TableComponent): void {
    this.submitted = true;
    tableRef.externalSearch(new Cliente(this.form.value)); 
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public navigateToView(row: any): void{
    this.router.navigate([`/clientes/visualizar/${row.id}`]);
  }

  public onClickAction(event: any): void {
    switch (event.action){
      case 'add':
        this.router.navigate([`/clientes/novo`]);
        break;
    }
  }
}
