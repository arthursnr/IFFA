export function Relatos() {
    return (
        <div id="relatos" className="flex flex-col gap-10 min-h-screen py-16 px-5 text-[#0B0105] bg-[#E8E8F9]">
            <div className="flex flex-col w-full gap-6 bg-white/40 shadow px-3.5 py-4 rounded-lg">
                <div className="flex gap-2 text-base font-semibold font-jost">
                    <img src="/goal.svg" alt="Missão" />
                    <span>Nossa Missão</span>
                </div>
                <div className="flex gap-5 items-center text-wrap">
                    <img src="/iffa1.webp" alt="" className="size-20 hidden sm:block" />

                    <p className="font-ibm text-base leading-6 text-balance">Nossa missão é fomentar a inclusão social e
                        assegurar a defesa dos direitos das pessoas com
                        deficiência e de suas famílias, por meio de um <span className="text-blue-500">
                            acolhimento humanizado, suporte integral e ações
                            de conscientização</span>, com o compromisso de edificar
                        uma sociedade mais justa, inclusiva e acolhedora."
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-full gap-6 bg-white/40 shadow px-3.5 py-4 rounded-lg">
                <div className="flex gap-2 text-base font-semibold font-jost">
                    <img src="/eye.svg" alt="Missão" />
                    <span>Nossa Visão</span>
                </div>

                <div className="flex gap-5 items-center text-wrap">
                    <p className="font-ibm text-base leading-6 text-balance">Ser reconhecida como referência no estado do Rio de
                        Janeiro por nossa atuação <span className="text-blue-500">transformadora, comprometida
                            com a defesa dos direitos das pessoas com deficiência e a
                            promoção de uma sociedade genuinamente inclusiva</span>, onde
                        prevaleçam a igualdade de oportunidades e o respeito à
                        dignidade de cada indivíduo
                    </p>

                    <img src="/iffa2.webp" alt="" className="size-20 hidden sm:block md:block" />
                </div>
            </div>

            <div className="flex flex-col w-full gap-6 bg-white/40 shadow px-3.5 py-4 rounded-lg">
                <div className="flex gap-2 text-base font-semibold font-jost">
                    <img src="/value.svg" alt="Missão" />
                    <span>Nossos Valores</span>
                </div>

                <div className="flex gap-5 items-center text-wrap">
                    <img src="/iffa3.webp" alt="" className="size-20 hidden sm:block md:block" />

                    <p className="font-ibm text-base leading-6 text-balance">Nossos valores se baseiam na <span className="text-blue-500">inclusão, empatia,
                        justiça social, na transparência adjunto a parceria
                        e transformação social.</span> O Instituto Fórum De Famílias
                        Atípicas valoriza a diversidade e luta para erradicar
                        barreiras que dificultam a plena inserção de
                        indivíduos portadores de deficiência no âmbito
                        social.
                        <br />
                        <br />
                        Além desse fator, cabe pontuar que o Instituto busca <span className="text-blue-500">compreender</span> e <span className="text-blue-500">acolher</span> as necessidades individuais
                        de cada pessoa (junto ao seu familiar), oferecendo
                        um suporte humanizado.
                    </p>
                </div>
            </div>

        </div>
    )
}