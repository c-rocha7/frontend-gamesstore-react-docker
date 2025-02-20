import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  data_lancamento: string;
  preco: string;
  foto: string;
  categoria: Categoria | null;
}
