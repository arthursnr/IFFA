export interface Legislacao {
  nome: string;
  artigo: string;
  url: string;
}

export interface Direito {
  id: number;
  condicao: string;
  categoria: string;
  titulo: string;
  resumo: string;
  descricao: string;
  requisitos: string[];
  como_solicitar: string[];
  legislacao: Legislacao[];
}