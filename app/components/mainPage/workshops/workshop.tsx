import { WorkshopEvents } from "../../workshopsEvents/workshopEvents";

export function Workshop() {
    return (
        <div className="flex flex-col gap-12 bg-white text-[#0B0105] min-h-screen w-screen py-12 px-5">
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Eventos</span>
                <div className="flex flex-col gap-5 text-center">
                    <p className="text-3xl">Workshops</p>
                    <p>Junte-se a nós em eventos envolventes, criados para apoiar e conectar famílias de crianças com necessidades especiais.</p>
                </div>
            </div>

            <WorkshopEvents />
            
        </div>
    )
}