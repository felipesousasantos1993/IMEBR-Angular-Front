import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembroCadastrarComponent } from './membro/cadastrar/membro-cadastrar.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'angular2-color-picker';

const routes: Routes = [
  {
    path: '',
    component: MembroCadastrarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MembroCadastrarComponent
  ]
})
export class EditorModule { }
