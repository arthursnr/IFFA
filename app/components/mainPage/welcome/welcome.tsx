export function Welcome() {
    return (
        <div>

            
            <section className="pt-32 pb-20">
                <div className="max-w-6xl mx-auto text-center px-6">

                    <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">

                       
                        <img
                            src="/mainphoto.jpg"
                            alt="Famílias unidas"
                            className="w-full h-full object-cover"
                        />

                       
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                        <h2 className="absolute bottom-8 left-1/2 -translate-x-1/2 
                            text-3xl md:text-4xl font-extrabold text-white drop-shadow-xl max-w-2xl px-4">
                            Seja Bem-vindo ao Instituto Fórum de Famílias Atípicas
                        </h2>
                    </div>

                </div>
            </section>


            
            <section className="py-16">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <p className="text-lg md:text-xl leading-relaxed text-black/80 mb-6">
                        O Instituto Fórum de Famílias Atípicas (IFFA) tem como principal objetivo criar um ambiente
                        acolhedor, informativo e colaborativo para todas as famílias que enfrentam desafios
                        relacionados ao desenvolvimento atípico de seus filhos.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-black/80 mb-10">
                        Somos um espaço de troca de experiências, formação, apoio emocional e acesso a informações 
                        de qualidade, sempre com foco na inclusão e na construção de uma comunidade mais justa.
                    </p>

                   
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">

                        <a
                            href="#"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold 
                            shadow-md hover:bg-indigo-700 transition"
                        >
                            Saiba Mais
                        </a>

                        <a
                            href="#"
                            className="px-8 py-3 border border-indigo-600 text-indigo-700 
                            rounded-xl font-semibold hover:bg-indigo-50 transition"
                        >
                            Entrar na Comunidade
                        </a>

                    </div>

                </div>
            </section>

        </div>
    )
}
