export function Donate() {
    return (
        <section
            id="donate"
            className="w-full bg-[#1414A2] text-white py-20 px-6 lg:py-28 lg:px-20"
        >
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                
                {/* Texto */}
                <div className="flex flex-col gap-8">
                    <header className="flex flex-col gap-4">
                        <h2 className="font-jost text-4xl lg:text-5xl font-semibold leading-tight">
                            Faça Parte da IFFA
                        </h2>

                        <p className="font-ibm text-base lg:text-lg leading-relaxed text-white/90 max-w-md">
                            Juntos, podemos transformar a realidade de milhares de
                            crianças e famílias. Cada ação importa — seja doando ou dedicando seu tempo.
                        </p>
                    </header>

                    {/* Botões */}
                    <div className="flex gap-5">
                        {/* Botão principal */}
                        <a
                            href="https://www.vakinha.com.br/5228021"
                            target="_blank"
                            className="py-3 px-7 bg-white text-[#1414A2] font-ibm font-medium text-base border border-white/30 rounded-lg shadow-sm hover:bg-white/90 transition"
                        >
                            Fazer uma Doação
                        </a>

                        {/* Botão secundário */}
                        <a
                            href="https://www.atados.com.br/ong/instituto-forum-de-familias-atipicas-323239/vagas"
                            target="_blank"
                            className="py-3 px-7 border border-white/30 font-ibm font-medium text-base rounded-lg hover:bg-white/20 transition"
                        >
                            Seja um Voluntário
                        </a>
                    </div>
                </div>

                {/* Imagem */}
                <div className="w-full flex justify-center">
                    <img
                        src="/footerImg.jpg"
                        alt="Famílias unidas em apoio"
                        className="rounded-3xl shadow-xl object-cover w-full max-w-lg h-72 lg:h-96"
                    />
                </div>
            </div>
        </section>
    );
}
