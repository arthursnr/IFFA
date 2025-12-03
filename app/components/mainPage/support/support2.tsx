export function Support2() {
    return (
        <div 
            id="support2" 
            className="flex flex-col gap-16 bg-white min-h-screen w-screen py-20 px-6 text-[#0B0105] text-center items-center lg:py-28 lg:px-20"
        >

            {/* Cabeçalho */}
            <div className="flex flex-col gap-4 max-w-3xl">
                <span className="text-sm font-semibold font-ibm tracking-wide text-[#5A4FCF]">
                    Juntos pela Inclusão
                </span>

                <h2 className="text-3xl font-jost font-semibold leading-tight lg:text-5xl text-[#0D0D0D]">
                    Empoderando Famílias de Crianças com Necessidades Especiais
                </h2>

                <p className="font-ibm text-base lg:text-lg text-[#555] leading-7">
                    No Fórum de Famílias Atípicas, oferecemos um espaço seguro para que as famílias se 
                    conectem e compartilhem experiências. Nossa missão é empoderar e apoiar aqueles que 
                    enfrentam os desafios de criar crianças com necessidades especiais.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-6xl">

                {/* Card 1 */}
                <div className="flex flex-col items-center gap-4 px-4">
                    <img src="/icon.svg" alt="icon" className="size-12" />
                    <p className="text-xl lg:text-2xl font-jost font-semibold leading-snug text-[#1A1A1A]">
                        Grupos de Apoio  
                    </p>
                    <p className="font-ibm text-base text-[#555]">
                        Participe dos nossos grupos para encontrar comunidade, troca e compreensão.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center gap-4 px-4">
                    <img src="/icon.svg" alt="icon" className="size-12" />
                    <p className="text-xl lg:text-2xl font-jost font-semibold leading-snug text-[#1A1A1A]">
                        Recursos Educacionais
                    </p>
                    <p className="font-ibm text-base text-[#555]">
                        Acesse materiais e conteúdos valiosos para apoiá-lo na jornada.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center gap-4 px-4">
                    <img src="/icon.svg" alt="icon" className="size-12" />
                    <p className="text-xl lg:text-2xl font-jost font-semibold leading-snug text-[#1A1A1A]">
                        Defesa e Inclusão
                    </p>
                    <p className="font-ibm text-base text-[#555]">
                        Estamos comprometidos em defender os direitos das famílias e das crianças.
                    </p>
                </div>

            </div>

        </div>
    );
}
