export function Principios() {
    return (
        <div
            id="principios"
            className="flex flex-col gap-20 py-24 px-6 bg-[#F5F4FF] text-[#0B0105] 
                       lg:px-24 lg:py-32"
        >
            {/* Título */}
            <h2 className="text-center text-sm font-semibold font-ibm tracking-wide 
                           bg-gradient-to-r from-[#5A4FCF] to-[#8676FF] bg-clip-text text-transparent">
                Nossos Princípios
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                {/* Card */}
                <div className="flex flex-col gap-6 bg-white rounded-2xl px-7 py-9 
                                border border-[#E8E8FA] shadow-[0px_12px_40px_-10px_rgba(0,0,0,0.07)] 
                                transition-all duration-300 hover:shadow-[0px_16px_50px_-10px_rgba(0,0,0,0.10)]">

                    {/* Ícone + título */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-[#F3F0FF]">
                            <img src="/goal.svg" className="size-6" alt="Missão" />
                        </div>
                        <span className="text-xl font-semibold font-ibm">
                            Nossa Missão
                        </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex gap-5 items-start">
                        <img
                            src="/iffa1.webp"
                            alt="Missão"
                            className="size-20 rounded-xl object-cover hidden md:block"
                        />

                        <p className="font-jost text-[15px] leading-7 text-[#333]">
                            Nossa missão é fomentar a inclusão social e assegurar os direitos das pessoas
                            com deficiência e suas famílias por meio de{" "}
                            <span className="text-[#4A57FF] font-semibold">
                                acolhimento humanizado, suporte integral e ações de conscientização
                            </span>, promovendo uma sociedade mais justa e acolhedora.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-6 bg-white rounded-2xl px-7 py-9 
                                border border-[#E8E8FA] shadow-[0px_12px_40px_-10px_rgba(0,0,0,0.07)] 
                                transition-all duration-300 hover:shadow-[0px_16px_50px_-10px_rgba(0,0,0,0.10)]">

                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-[#F3F0FF]">
                            <img src="/eye.svg" className="size-6" alt="Visão" />
                        </div>
                        <span className="text-xl font-semibold font-ibm">
                            Nossa Visão
                        </span>
                    </div>

                    <div className="flex gap-5 items-start">
                        <img
                            src="/iffa2.webp"
                            alt="Visão"
                            className="size-20 rounded-xl object-cover hidden md:block"
                        />

                        <p className="font-jost text-[15px] leading-7 text-[#333]">
                            Ser reconhecida como referência no Rio de Janeiro pela atuação{" "}
                            <span className="text-[#4A57FF] font-semibold">transformadora e comprometida</span>{" "}
                            com a defesa dos direitos das pessoas com deficiência e a promoção de
                            uma sociedade inclusiva, baseada no respeito e na igualdade de oportunidades.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-6 bg-white rounded-2xl px-7 py-9 
                                border border-[#E8E8FA] shadow-[0px_12px_40px_-10px_rgba(0,0,0,0.07)] 
                                transition-all duration-300 hover:shadow-[0px_16px_50px_-10px_rgba(0,0,0,0.10)]">

                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-[#F3F0FF]">
                            <img src="/value.svg" className="size-6" alt="Valores" />
                        </div>
                        <span className="text-xl font-semibold font-ibm">
                            Nossos Valores
                        </span>
                    </div>

                    <div className="flex gap-5 items-start">
                        <img
                            src="/iffa3.webp"
                            alt="Valores"
                            className="size-20 rounded-xl object-cover hidden md:block"
                        />

                        <p className="font-jost text-[15px] leading-7 text-[#333]">
                            Valorizamos a{" "}
                            <span className="text-[#4A57FF] font-semibold">
                                inclusão, empatia, justiça social, transparência e transformação
                            </span>.
                            Trabalhamos para eliminar barreiras e promover uma sociedade acessível.

                            <br /><br />

                            Também buscamos{" "}
                            <span className="text-[#4A57FF] font-semibold">compreender</span> e{" "}
                            <span className="text-[#4A57FF] font-semibold">acolher</span> as necessidades
                            de cada pessoa e família, oferecendo suporte sensível e humanizado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
