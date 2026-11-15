import { Direito } from "../../../../types/direitos";

interface Props {
  direito: Direito;
}

export default function CardDireito({ direito }: Props) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {direito.condicao}
        </span>

        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          {direito.categoria}
        </span>
      </div>

      <h2 className="mb-3 text-xl font-bold text-gray-900">
        {direito.titulo}
      </h2>

      <p className="mb-5 text-sm leading-6 text-gray-600">
        {direito.resumo}
      </p>

      <details className="group border-t border-gray-100 pt-4">
        <summary className="cursor-pointer list-none font-semibold text-blue-700 hover:text-blue-900">
          Ver detalhes
          <span className="float-right transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="mt-4 space-y-5 text-sm text-gray-700">
          <section>
            <h3 className="mb-2 font-bold text-gray-900">
              Sobre esse direito
            </h3>
            <p className="leading-6">{direito.descricao}</p>
          </section>

          <section>
            <h3 className="mb-2 font-bold text-gray-900">
              O que é necessário?
            </h3>
            <ul className="list-inside list-disc space-y-1">
              {direito.requisitos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-2 font-bold text-gray-900">
              Como solicitar?
            </h3>
            <ol className="list-inside list-decimal space-y-2">
              {direito.como_solicitar.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </section>

          <section>
            <h3 className="mb-2 font-bold text-gray-900">
              Base legal
            </h3>

            <div className="space-y-2">
              {direito.legislacao.map((lei, index) => (
                <a
                  key={index}
                  href={lei.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 underline hover:text-blue-900"
                >
                  {lei.nome} — {lei.artigo}
                </a>
              ))}
            </div>
          </section>
        </div>
      </details>
    </article>
  );
}