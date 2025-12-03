import { div } from "framer-motion/client"

export function Support() {
    return (
        <div className="flex flex-col gap-20 bg-[#FAFAFC] text-[#1A1A1A] min-h-screen py-16 px-6
                        lg:px-24 lg:py-28 lg:grid lg:grid-cols-2 lg:gap-28 lg:items-center">

            {/* Texto */}
            <div id="support" className="flex flex-col gap-12">

                {/* Título + descrição */}
                <div className="flex flex-col gap-5">
                    <span className="text-sm font-semibold font-ibm tracking-wide bg-gradient-to-r 
                                     from-[#5A4FCF] to-[#8C79FF] bg-clip-text text-transparent">
                        Comunidade de Apoio
                    </span>

                    <h2 className="text-5xl lg:text-6xl font-jost font-bold leading-tight text-[#0D0D0D]">
                        Junte-se à Nossa Comunidade de Famílias Empoderadas
                    </h2>

                    <p className="font-ibm text-lg text-[#4A4A4A] max-w-xl leading-relaxed">
                        Ao se juntar a nós, você terá acesso a recursos valiosos e a uma rede de apoio.
                        Juntos, podemos enfrentar os desafios de criar crianças com necessidades especiais.
                    </p>
                </div>

                {/* Benefícios */}
                <div className="flex flex-col gap-8">

                    {/* Card */}
                    <div className="flex gap-5 items-start">
                        <div className="p-4 rounded-xl bg-white shadow-sm border border-[#EAEAF2]">
                            <img src="/icon.svg" alt="icon" className="size-8 sm:hidden"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-2xl font-jost font-semibold text-[#0D0D0D]">
                                Comunidade de Suporte
                            </p>
                            <p className="font-ibm text-base text-[#555] leading-relaxed">
                                Conecte-se com famílias que compreendem sua jornada e compartilhe experiências.
                            </p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex gap-5 items-start">
                        <div className="p-4 rounded-xl bg-white shadow-sm border border-[#EAEAF2]">
                            <img src="/icon.svg" alt="icon" className="size-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-2xl font-jost font-semibold text-[#0D0D0D]">
                                Recursos Valiosos
                            </p>
                            <p className="font-ibm text-base text-[#555] leading-relaxed">
                                Acesse orientações de especialistas, workshops e materiais personalizados.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <button className="mt-4 w-fit bg-[#5A4FCF] hover:bg-[#6E62E8] 
                                   text-white font-ibm font-medium px-8 py-3 rounded-lg 
                                   shadow-md transition-all duration-200">
                    <a href="https://chat.whatsapp.com/HsCoNRw2wmS9RdnNvfqbi5">
                        Quero Participar
                    </a>
                </button>

            </div>

            {/* Imagem */}
            <div className="flex justify-center">
                <img
                    src="iffaImg.jpg"
                    alt="Foto da comunidade"
                    className="h-[640px] rounded-2xl object-cover shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)]"
                />
            </div>
        </div>
    )
}
