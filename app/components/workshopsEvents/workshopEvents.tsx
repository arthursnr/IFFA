export function WorkshopEvents() {
    const items = [
        {
            title: "Sessões de Cinema Inclusivo",
            date: "05/04/2025",
            description: `
                O projeto busca promover uma experiência cinematográfica acessível,
                garantindo inclusão, lazer e conscientização sobre as barreiras
                enfrentadas por pessoas com deficiência.
            `
        },
        {
            title: "Vínculo Inabalável",
            date: "05/04/2025",
            description: `
                Um ambiente acolhedor onde pessoas com deficiência podem construir
                relacionamentos genuínos, fortalecendo vínculos e estimulando a 
                interação social.
            `
        },
        {
            title: "Dia das Crianças Inclusivo",
            date: "05/10/2025",
            description: `
                Uma celebração que respeita e acolhe a diversidade — cultural,
                social, econômica e de habilidades — gerando conscientização
                e inclusão para todas as crianças.
            `
        },
        {
            title: "Empoderando a Inclusão",
            date: "10/2025",
            description: `
                Evento dedicado à defesa dos direitos e ao fortalecimento da voz
                das pessoas com deficiência, promovendo reflexão e avanço social.
            `
        },
        {
            title: "Natal Para Todos",
            date: "12/2025",
            description: `
                Um encontro especial e tranquilo com o Papai Noel, pensado para
                crianças e jovens com TEA, oferecendo um ambiente sensorialmente
                adequado e acolhedor.
            `
        },
    ];

    return (
        <div className="flex gap-8 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-hidden w-full max-w-7xl">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-5 bg-white border border-gray-200 shadow-sm rounded-2xl p-6 lg:p-8 min-w-72 max-w-md"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-ibm text-sm text-gray-700">
                            Data: {item.date}
                        </span>
                        <span className="py-1 px-3 text-xs font-semibold border border-gray-300 rounded-md bg-gray-100">
                            Coming Soon
                        </span>
                    </div>

                    <h3 className="font-jost text-xl lg:text-2xl leading-7 lg:leading-8 font-semibold">
                        {item.title}
                    </h3>

                    <p className="font-ibm text-sm lg:text-base leading-6 text-gray-700">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
