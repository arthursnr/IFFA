import { div } from "framer-motion/client"

export function Support() {
    return (
        <div className="flex flex-col gap-12 bg-[#E8E8F9] text-[#0B0105] min-h-screen min-w-screen py-12 px-5 lg:px-16 lg:py-28 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

            <div id="support" className="flex flex-col gap-8">
                <div className="flex flex-col gap-3 lg:gap-4">
                    <div>
                        <span className="text-base font-semibold font-ibm">Suporte</span>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="text-4xl font-jost leading-11 lg:leading-14 lg:text-5xl"> Junte-se à Nossa Comunidade de Famílias Empoderadas</p>
                        <p className="font-ibm text-base leading-6 lg:text-lg lg:leading-7">Ao se juntar a nós, você terá acesso a recursos valiosos e a uma rede de apoio. Juntos, podemos enfrentar os desafios de criar crianças com necessidades especiais.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <img src="/icon.svg" alt="icon" className="size-12" />
                        <p className="text-xl leading-7 font-jost">Comunidade de Suporte</p>
                        <p className="font-ibm text-base leading-6">Conecte-se com famílias que compreendem sua jornada e compartilhe experiências.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="/icon.svg" alt="icon" className="size-12" />
                        <p className="text-xl leading-7 font-jost">Recursos Valiosos</p>
                        <p className="font-ibm text-base leading-6">Acesse orientações de especialistas, workshops e materiais personalizados para as necessidades da sua família.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="iffaImg.jpg" alt="" className="h-[640px] self-stretch rounded-md shadow-lg" />
            </div>
        </div>
    )
} 