export function Donate() {
    return (
        <div className="flex flex-col w-screen py-16 px-5 text-white bg-[#1414A2]">
            <div className="flex flex-col gap-5">
                <span className="text-4xl leading-11">Faça Parte da IFFA</span>
                <p className="text-base leading-6">Juntos, podemos fazer a diferença para as nossas crianças.</p>
                <div className="flex gap-4">
                    <button className="py-2.5 px-6 bg-white text-[#0B0105] border border-[#DAD8D9] border-b-4 rounded-md hover:bg-white/70">Doar</button>
                    <button className="py-2.5 px-6 border border-b-4 border-white/20 rounded-md hover:bg-white/25">Volutariar-se</button>
                </div>
            </div>
        </div>
    )
}