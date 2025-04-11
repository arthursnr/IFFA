import { WorkshopEvents } from "../../workshopsEvents/workshopEvents";

export function Workshop() {
    return (
        <div className="flex flex-col gap-12 bg-white text-[#0B0105] min-h-screen w-screen py-12 px-5">
            <div className="flex flex-col gap-3">
                <span className="font-ibm text-base leading-6 font-semibold">Eventos</span>
                <div className="flex flex-col gap-5 text-center">
                    <p className="font-jost leading-10 text-3xl">Workshops</p>
                    <p className="font-ibm text-base leading-6">Junte-se a nós em eventos envolventes, criados para apoiar e conectar famílias de crianças com necessidades especiais.</p>
                </div>
            </div>

            <WorkshopEvents />
            
        </div>
    )
}