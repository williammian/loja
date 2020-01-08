import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { UppercaseDirective } from './uppercase.directive';

import { ProdutoService } from './produto.service';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/:id', component: EditarProdutoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProdutoService],
  //providers: [{provide: ProdutoService, useClass: ProdutoServiceMelhor}], //mais recomendado quando utilizado Interface e classe que a implemente
  bootstrap: [AppComponent]
})
export class AppModule { }
