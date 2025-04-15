export function Welcome() {
    return (
        <div id="welcome" className="text-white bg-[#5E5EDA] min-h-screen min-w-screen">
            <img src="/mainphoto.jpg" alt="Foto da Familia IFFA" className="w-screen lg:h-screen" />
            <div className="flex flex-col gap-5 py-12 px-5 lg:grid lg:grid-cols-2 lg:items-center lg:px-16 lg:py-20 lg:gap-20">
                <h1 className="text-4xl font-jost lg:text-5xl lg:leading-16">Seja bem vindo ao Fórum de Famílias Atípicas</h1>
                <p className="font-ibm text-base leading-6 lg:text-lg lg:leading-7">O Instituto Fórum de Famílias Atípicas  (IFFA) tem como missão principal fornecer suporte e recursos para famílias com crianças, jovens, adultos e idosos com deficiência ou doença raras  Desde o primeiro diagnóstico, nosso objetivo é garantir que essas famílias não se sintam sozinhas e desamparadas. Nosso público inclui desde o nascimento até acima dos 60 anos com deficiência, neurodivergência ou doenças raras, e seus familiares, incluindo pais, irmãos, avós e outros cuidadores que são diretamente impactados com o diagnóstico.</p>
            </div>
        </div>
    )
}