import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from 'angular2-color-picker';
import { Http, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { MembroService } from '../../service/membro.service';
import { Membro } from "../../model/Membro"
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

declare const $: any; // jQuery

@Component({
  selector: 'membro-cadastrar',
  templateUrl: './membro-cadastrar.component.html',
  styleUrls: ['./membro-cadastrar.component.css'],
  providers: [MembroService]
})
export class MembroCadastrarComponent implements OnInit {

  membro: Membro;

  constructor(private membroService: MembroService) { }

  ngOnInit() { }

  incluir() {
    this.membroService.incluir(this.membro).subscribe(
      result => {
        console.log('Membro incluido com sucesso!');
      },
      err => console.log(err)
    );
  }

  atualizar() {
    this.membroService.atualizar(this.membro).subscribe(
      result => {
        console.log('Membro atualizado com sucesso!');
      },
      err => console.log(err)
    );
  }

  excluir() {
    this.membroService.excluir(this.membro).subscribe(
      result => {
        console.log('Membro excluído com sucesso!');
      },
      err => console.log(err)
    );
  }

  listarTodos() {
    this.membroService.listarTodos().subscribe(
      result => {
        console.log(result);
      },
      err => console.log(err)
    );
  }

} 