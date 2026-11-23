"use client";

import { useMemo, useState } from "react";

import direitosData from "../../../data/direitos.json";

import CardDireito from "./direitos_components/cardDireito";

import type { Direito } from "../../../types/direitos";

const direitos: Direito[] = direitosData;

export function DireitosPage() {
  const [condicao, setCondicao] = useState("Todas");
  const [categoria, setCategoria] = useState("Todas");

  const condicoes = useMemo(
    () => [...new Set(direitos.map((item) => item.condicao))],
    []
  );

  const categorias = useMemo(
    () => [...new Set(direitos.map((item) => item.categoria))],
    []
  );

  const direitosFiltrados = direitos.filter((direito) => {
    const correspondeCondicao =
      condicao === "Todas" || direito.condicao === condicao;

    const correspondeCategoria =
      categoria === "Todas" || direito.categoria === categoria;

    return correspondeCondicao && correspondeCategoria;
  });

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12" id="direitos">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <header className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Informação e inclusão
          </span>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Conheça seus direitos
          </h1>

          <p className="mx-auto max-w-2xl text-gray-600">
            Encontre informações sobre os direitos das crianças atípicas,
            saiba o que a legislação garante e descubra como buscar esses
            direitos.
          </p>
        </header>

        {/* Filtros */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-gray-900">
            Consulte os direitos
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="condicao"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Condição
              </label>

              <select
                id="condicao"
                value={condicao}
                onChange={(e) => setCondicao(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Todas">Todas as condições</option>

                {condicoes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="categoria"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Área do direito
              </label>

              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Todas">Todas as áreas</option>

                {categorias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Resultado */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Direitos encontrados
          </h2>

          <span className="text-sm text-gray-500">
            {direitosFiltrados.length} resultado(s)
          </span>
        </div>

        {direitosFiltrados.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {direitosFiltrados.map((direito) => (
              <CardDireito key={direito.id} direito={direito} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Nenhum direito encontrado
            </h3>

            <p className="mb-5 text-sm text-gray-500">
              Tente selecionar outra condição ou categoria.
            </p>

            <button
              onClick={() => {
                setCondicao("Todas");
                setCategoria("Todas");
              }}
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Aviso */}
        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Importante:</strong> este conteúdo tem finalidade
            informativa e não substitui orientação jurídica. A aplicação
            de cada direito depende da legislação vigente e das
            circunstâncias do caso concreto.
          </p>
        </div>
      </div>
    </main>
  );
}