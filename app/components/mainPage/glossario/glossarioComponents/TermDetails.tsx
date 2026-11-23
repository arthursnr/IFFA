"use client";

import { GlossaryTerm } from "../../../../data/glossary";

type Props = {
  term: GlossaryTerm | null;
  terms: GlossaryTerm[];
  onClose: () => void;
  onRelatedClick: (term: GlossaryTerm) => void;
};

export default function TermDetails({
  term,
  terms,
  onClose,
  onRelatedClick,
}: Props) {
  if (!term) return null;

  const related = terms.filter((item) =>
    term.relatedTerms.includes(item.term)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="term-title"
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              {term.category}
            </span>

            <h2
              id="term-title"
              className="text-2xl font-bold text-gray-900"
            >
              {term.term}
            </h2>

            {term.abbreviation && (
              <p className="mt-2 text-sm font-medium text-teal-700">
                {term.abbreviation}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-xl bg-gray-100 px-3 py-2 text-gray-600 transition hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-500">
              Definição
            </h3>

            <p className="text-base leading-relaxed text-gray-700">
              {term.definition}
            </p>
          </section>

          <section className="rounded-2xl bg-teal-50 p-5">
            <h3 className="mb-2 font-bold text-teal-900">
              Em palavras simples
            </h3>

            <p className="leading-relaxed text-teal-800">
              {term.simpleExplanation}
            </p>
          </section>

          {related.length > 0 && (
            <section>
              <h3 className="mb-3 font-bold text-gray-900">
                Termos relacionados
              </h3>

              <div className="flex flex-wrap gap-2">
                {related.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onRelatedClick(item)}
                    className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50"
                  >
                    {item.term} →
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}