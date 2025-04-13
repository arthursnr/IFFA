export function Support2() {
    return (
        <div id="support2" className="flex flex-col gap-12 bg-white min-h-screen w-screen py-16 px-5 text-[#0B0105] text-center">
            <div className="flex flex-col gap-3">
                <span className="text-base font-semibold font-ibm">Suporte</span>
                <div className="flex flex-col gap-5">
                    <p className="text-4xl font-jost leading-10">Empoderando Famílias de Crianças com Necessidades Especiais</p>
                    <p className="font-ibm text-base leading-6">No Fórum de Famílias Atípicas, oferecemos um espaço seguro para que as famílias se conectem e compartilhem experiências. Nossa missão é empoderar e apoiar aqueles que enfrentam os desafios de criar crianças com necessidades especiais.</p>
                </div>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex flex-col items-center gap-4">
                    <img src="/icon.svg" alt="icon" className="size-12"/>
                    <p className="text-2xl font-jost leading-8">Grupos de Apoio para Conexão e Crescimento</p>
                    <p className="font-ibm text-base leading-6">Participe dos nossos grupos de apoio para encontrar comunidade e compreensão.</p>
                </div>
                <div className="flex flex-col items-center  gap-4">
                <img src="/icon.svg" alt="icon" className="size-12"/>
                    <p className="text-2xl font-jost leading-8">Recursos Educacionais para uma Parentalidade Informada</p>
                    <p className="font-ibm text-base leading-6">Acesse recursos valiosos para ajudá-lo em sua jornada.</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                <img src="/icon.svg" alt="icon" className="size-12"/>
                    <p className="text-2xl font-jost leading-8">Defesa dos Direitos e Inclusão</p>
                    <p className="font-ibm text-base leading-6">Defendemos os direitos das famílias e das crianças com necessidades especiais.</p>
                </div>

            </div>
        </div>
    )
}