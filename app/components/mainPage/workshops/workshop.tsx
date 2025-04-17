import { WorkshopEvents } from "../../workshopsEvents/workshopEvents";

export function Workshop() {
    return (
        <div id="workshop" className="flex flex-col gap-12 bg-white text-[#0B0105] min-h-screen w-screen py-12 px-5 lg:py-28 lg:px-16 lg:gap-20 lg:items-center">
            <div className="flex flex-col gap-3 text-center lg:gap-4 lg:w-3xl">
                <span className="font-ibm text-base leading-6 font-semibold">Eventos</span>
                <div className="flex flex-col gap-5 text-center lg:gap-6">
                    <p className="font-jost leading-10 text-3xl lg:text-5xl lg:leading-14">Workshops</p>
                    <p className="font-ibm text-base leading-6 lg:text-lg lg:leading-7">Junte-se a nós em eventos envolventes, criados para apoiar e conectar famílias de crianças com necessidades especiais.</p>
                </div>
            </div>

            <WorkshopEvents />
            
        </div>
    )
}