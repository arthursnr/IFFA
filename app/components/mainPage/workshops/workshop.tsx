import { WorkshopEvents } from "../../workshopsEvents/workshopEvents";

export function Workshop() {
    return (
        <section
            id="workshop"
            className="flex flex-col gap-16 bg-white text-[#0B0105] w-full py-20 px-6 lg:py-28 lg:px-20"
        >
            <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                <span className="font-ibm text-sm font-semibold tracking-wide text-indigo-600">
                    Eventos
                </span>

                <h2 className="font-jost text-4xl lg:text-5xl font-semibold leading-tight">
                    Workshops
                </h2>

                <p className="font-ibm text-base lg:text-lg text-[#333] leading-7">
                    Participe de atividades especialmente planejadas para apoiar,
                    orientar e conectar famílias de crianças com necessidades especiais.
                </p>
            </div>

            <WorkshopEvents />
        </section>
    );
}
