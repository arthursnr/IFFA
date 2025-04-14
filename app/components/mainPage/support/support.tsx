export function Support() {
    return (
        <div id="support" className="flex flex-col gap-6 min-h-screen min-w-screen py-12 px-5 bg-[#E8E8F9] text-[#0B0105]">
            <div className="flex flex-col gap-3">
                <span className="text-base font-semibold font-ibm">Suporte</span>
                <div className="flex flex-col gap-5">
                    <p className="text-4xl font-jost leading-10"> Junte-se à Nossa Comunidade de Famílias Empoderadas</p>
                    <p className="font-ibm text-base leading-6">Ao se juntar a nós, você terá acesso a recursos valiosos e a uma rede de apoio. Juntos, podemos enfrentar os desafios de criar crianças com necessidades especiais.</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <img src="/icon.svg" alt="icon" className="size-12" />
                    <p className="text-lg font-jost">Comunidade de Suporte</p>
                    <p className="font-ibm text-base leading-6">Conecte-se com famílias que compreendem sua jornada e compartilhe experiências.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <img src="/icon.svg" alt="icon" className="size-12" />
                    <p className="text-lg font-jost">Recursos Valiosos</p>
                    <p className="font-ibm text-base leading-6">Acesse orientações de especialistas, workshops e materiais personalizados para as necessidades da sua família.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="iffaImg.jpg" alt="" className="h-80 w-75 self-stretch rounded-2xl shadow-lg"/>
            </div>
        </div>
    )
} 