export function Relatos() {
    return (
        <div className="flex w-screen py-16 px-5 text-[#0B0105] bg-[#E8E8F9]">
            <div className="flex flex-col gap-6 items-center text-center">
                <span>IFFA</span>
                <p>"O apoio que recebemos transformou a jornada da nossa família, fazendo-nos sentir compreendidos e conectados."</p>

                <div className="flex flex-col gap-4 items-center">
                    <img src="/avatarImage.jpeg" alt="Foto" className=" size-14 rounded-full" />
                    <div className="flex flex-col">
                        <span>Maria Silva</span>
                        <span>Mãe</span>
                    </div>
                </div>
            </div>

        </div>
    )
}