"use client";

import { GlossaryTerm } from "../../../../data/glossary";

type Props = {
  term: GlossaryTerm;
  isFavorite: boolean;
  onFavorite: (id: string) => void;
  onOpen: (term: GlossaryTerm) => void;
};

export default function TermCard({
  term,
  isFavorite,
  onFavorite,
  onOpen,
}: Props) {
  return (
    <article className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
          {term.category}
        </span>

        <button
          type="button"
          onClick={() => onFavorite(term.id)}
          aria-label={
            isFavorite
              ? "Remover dos favoritos"
              : "Adicionar aos favoritos"
          }
          title={isFavorite ? "Remover favorito" : "Favoritar"}
          className={`rounded-lg p-2 transition-colors ${
            isFavorite
              ? "bg-amber-50 text-amber-500"
              : "text-gray-400 hover:bg-gray-100 hover:text-amber-500"
          }`}
        >
          <span className="text-lg">{isFavorite ? "★" : "☆"}</span>
        </button>
      </div>

      <h3 className="mb-2 text-lg font-bold text-gray-900">
        {term.term}
      </h3>

      {term.abbreviation && (
        <p className="mb-2 text-sm font-medium text-teal-700">
          {term.abbreviation}
        </p>
      )}

      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {term.simpleExplanation}
      </p>

      <button
        type="button"
        onClick={() => onOpen(term)}
        className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
      >
        Saiba mais
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </article>
  );
}