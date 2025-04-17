export function Donate() {
    return (
        <div id="donate" className="flex flex-col w-screen py-16 px-5 text-white bg-[#1414A2] lg:py-28 lg:px-16">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
                <div className="flex flex-col gap-6 lg:gap-8">

                    <div className="flex flex-col gap-5 lg:gap-6">
                        <span className="text-jost text-4xl leading-10 lg:text-5xl lg:leading-14">Faça Parte da IFFA</span>
                        <p className="text-ibm text-base leading-6 lg:text-lg lg:leading-7">Juntos, podemos fazer a diferença para as nossas crianças.</p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="flex gap-4">
                            <button className="py-2.5 px-6 bg-white text-ibm text-base font-medium leading-6 text-[#0B0105] border border-[#DAD8D9] border-b-4 rounded-md hover:bg-white/70">
                                <a href="https://www.vakinha.com.br/5228021">Doar</a>
                            </button>
                            <button className="py-2.5 px-6 text-ibm text-base font-medium leading-6 border border-b-4 border-white/20 rounded-md hover:bg-white/25">
                                <a href="https://www.atados.com.br/ong/instituto-forum-de-familias-atipicas-323239/vagas">Volutariar-se</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="/footerImg.jpg" alt="" className="rounded-2xl shadow-2xl min-h-56 max-h-96" />
                </div>
            </div>
        </div>
    )
}