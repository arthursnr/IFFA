"use client";

import { useEffect, useMemo, useState } from "react";
import { glossaryTerms, GlossaryTerm } from "../../../data/glossary";
import TermCard from "./glossarioComponents/TermCard";
import TermDetails from "./glossarioComponents/TermDetails";

const categories = [
  "Todas",
  "Direitos",
  "Educação",
  "Saúde",
  "Acessibilidade",
  "Inclusão",
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedTerm, setSelectedTerm] =
    useState<GlossaryTerm | null>(null);

  // Carrega favoritos salvos no navegador
  useEffect(() => {
    const saved = localStorage.getItem("iffa-glossary-favorites");

    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Salva favoritos no navegador
  useEffect(() => {
    localStorage.setItem(
      "iffa-glossary-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Alterna favorito
  function toggleFavorite(id: string) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  // Filtra termos
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        term.term.toLowerCase().includes(searchText) ||
        term.abbreviation?.toLowerCase().includes(searchText) ||
        term.definition.toLowerCase().includes(searchText) ||
        term.simpleExplanation.toLowerCase().includes(searchText) ||
        term.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "Todas" || term.category === category;

      const matchesLetter =
        !selectedLetter ||
        term.term
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase()
          .startsWith(selectedLetter);

      const matchesFavorites =
        !favoritesOnly || favorites.includes(term.id);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLetter &&
        matchesFavorites
      );
    });
  }, [search, category, selectedLetter, favoritesOnly, favorites]);

  // Letras que possuem termos
  const availableLetters = useMemo(() => {
    return new Set(
      glossaryTerms.map((term) =>
        term.term
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .charAt(0)
          .toUpperCase()
      )
    );
  }, []);

  function clearFilters() {
    setSearch("");
    setCategory("Todas");
    setSelectedLetter("");
    setFavoritesOnly(false);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fa] text-gray-900" id="glossario">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-teal-100">
            <span>✦</span>
            <span>Conhecimento e inclusão</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Glossário
            <span className="block text-teal-300">
              Inclusivo
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-teal-100 sm:text-lg">
            Descubra o significado de termos, siglas e conceitos
            relacionados à inclusão, acessibilidade, saúde,
            educação e direitos.
          </p>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold">
                {glossaryTerms.length}
              </p>
              <p className="mt-1 text-sm text-teal-100">
                Termos disponíveis
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold">
                {categories.length - 1}
              </p>
              <p className="mt-1 text-sm text-teal-100">
                Categorias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        {/* PESQUISA */}
        <div className="mb-8">
          <label
            htmlFor="glossary-search"
            className="mb-3 block text-sm font-semibold text-gray-700"
          >
            O que você deseja descobrir?
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
              ⌕
            </span>

            <input
              id="glossary-search"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedLetter("");
              }}
              placeholder="Pesquise termos, siglas ou significados..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />
          </div>
        </div>

        {/* CATEGORIAS */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-bold text-gray-700">
            Categorias
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setSelectedLetter("");
                }}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  category === item
                    ? "bg-teal-700 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-teal-300 hover:text-teal-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ALFABETO */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-bold text-gray-700">
            Navegue por letra
          </h2>

          <div className="flex flex-wrap gap-1.5">
            {alphabet.map((letter) => {
              const available = availableLetters.has(letter);

              return (
                <button
                  key={letter}
                  type="button"
                  disabled={!available}
                  onClick={() =>
                    setSelectedLetter((current) =>
                      current === letter ? "" : letter
                    )
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition ${
                    selectedLetter === letter
                      ? "bg-teal-700 text-white"
                      : available
                        ? "border border-gray-200 bg-white text-gray-600 hover:border-teal-300 hover:text-teal-700"
                        : "cursor-not-allowed text-gray-300"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAVORITOS E RESULTADOS */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setFavoritesOnly((current) => !current)}
            className={`flex w-fit items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              favoritesOnly
                ? "bg-amber-100 text-amber-800"
                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{favoritesOnly ? "★" : "☆"}</span>
            {favoritesOnly
              ? "Exibindo favoritos"
              : "Ver favoritos"}
            <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs">
              {favorites.length}
            </span>
          </button>

          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                {filteredTerms.length}
              </span>{" "}
              {filteredTerms.length === 1
                ? "termo encontrado"
                : "termos encontrados"}
            </p>

            {(search ||
              category !== "Todas" ||
              selectedLetter ||
              favoritesOnly) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-teal-700 hover:underline"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* LISTA */}
        {filteredTerms.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTerms.map((term) => (
              <TermCard
                key={term.id}
                term={term}
                isFavorite={favorites.includes(term.id)}
                onFavorite={toggleFavorite}
                onOpen={setSelectedTerm}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mb-4 text-4xl">⌕</div>

            <h3 className="text-lg font-bold text-gray-900">
              Nenhum termo encontrado
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Tente pesquisar por outra palavra ou remover
              alguns filtros.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      {/* INFORMAÇÕES */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="rounded-3xl bg-teal-50 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-xl text-teal-700">
                ✦
              </div>

              <div>
                <h2 className="text-xl font-bold text-teal-900">
                  Informação também é inclusão
                </h2>

                <p className="mt-3 max-w-3xl leading-relaxed text-teal-800">
                  Este glossário foi pensado para facilitar o
                  acesso a informações e tornar conceitos
                  relacionados à inclusão mais compreensíveis.
                  As explicações são informativas e não
                  substituem orientações profissionais ou
                  informações oficiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <TermDetails
        term={selectedTerm}
        terms={glossaryTerms}
        onClose={() => setSelectedTerm(null)}
        onRelatedClick={setSelectedTerm}
      />
    </main>
  );
}