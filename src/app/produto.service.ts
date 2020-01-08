import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  getProdutos() {
    let produtos : Produto[] = [];

    let produto = new Produto();
    produto.id = 1;
    produto.nome = "Macarrão";
    produtos.push(produto);

    let produto2 = new Produto();
    produto2.id = 2;
    produto2.nome = "Feijão";
    produtos.push(produto2);

    return produtos;
  }

}
