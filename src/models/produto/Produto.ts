import type Categoria from "../categoria/Categoria";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria:  Categoria
}