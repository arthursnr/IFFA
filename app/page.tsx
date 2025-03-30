import { NavMenu } from "./components/buttons/NavMenu";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-[#5E5EDA]">
      <div className="text-white min-w-screen min-h-screen">
        <header className="bg-[#5E5EDA] h-fit min-w-screen flex items-center justify-between px-4">
          <img src="/logoIFFA_2.png" alt="Logo da IFFA" className="w-24 h-24 object-contain" />
          <NavMenu />
        </header>

        <div>

          {/*Welcome Page*/}
          <div className="flex flex-col gap-5 bg-[#5E5EDA] min-h-screen min-w-screen py-12 px-5">
            <p className="text-4xl">Seja bem vindo ao Fórum de Famílias Atípicas</p>
            <p>O Instituto Fórum de Famílias Atípicas  (IFFA) tem como missão principal fornecer suporte e recursos para famílias com crianças, jovens, adultos e idosos com deficiência ou doença raras  Desde o primeiro diagnóstico, nosso objetivo é garantir que essas famílias não se sintam sozinhas e desamparadas. Nosso público inclui desde o nascimento até acima dos 60 anos com deficiência, neurodivergência ou doenças raras, e seus familiares, incluindo pais, irmãos, avós e outros cuidadores que são diretamente impactados com o diagnóstico.</p>
          </div>

          {/*Support Page*/}
          <div className="flex flex-col gap-6 h-screen min-w-screen py-12 px-5 bg-[#E8E8F9] text-[#0B0105]">

            <div className="flex flex-col gap-3">
              <span className="text-base font-semibold">Suporte</span>
              <div className="flex flex-col gap-5">
                <p className="text-4xl"> Junte-se à Nossa Comunidade de Famílias Empoderadas</p>
                <p className="text-base">Ao se juntar a nós, você terá acesso a recursos valiosos e a uma rede de apoio. Juntos, podemos enfrentar os desafios de criar crianças com necessidades especiais.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-lg">Comunidade de Suporte</p>
                <p className="text-base">Conecte-se com famílias que compreendem sua jornada e compartilhe experiências.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg">Recursos Valiosos</p>
                <p className="text-base">Acesse orientações de especialistas, workshops e materiais personalizados para as necessidades da sua família.</p>
              </div>
            </div>
          </div>

          {/*Support Page 2*/}
          <div className="flex flex-col gap-12 bg-white min-h-screen w-screen py-16 px-5 text-[#0B0105] text-center">
            <div className="flex flex-col gap-3">
              <span className="text-base font-semibold">Suporte</span>
              <div className="flex flex-col gap-5">
                <p className="text-3xl">Empoderando Famílias de Crianças com Necessidades Especiais</p>
                <p>No Fórum de Famílias Atípicas, oferecemos um espaço seguro para que as famílias se conectem e compartilhem experiências. Nossa missão é empoderar e apoiar aqueles que enfrentam os desafios de criar crianças com necessidades especiais.</p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-2xl">Grupos de Apoio para Conexão e Crescimento</p>
                <p>Participe dos nossos grupos de apoio para encontrar comunidade e compreensão.</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl">Recursos Educacionais para uma Parentalidade Informada</p>
                <p>Acesse recursos valiosos para ajudá-lo em sua jornada.</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-2xl">Defesa dos Direitos e Inclusão</p>
                <p>Defendemos os direitos das famílias e das crianças com necessidades especiais.</p>
              </div>

            </div>
          </div>

          {/*Relatos*/}
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

          {/*Workshops*/}
          <div className="flex flex-col gap-12 bg-white text-[#0B0105] min-h-screen w-screen py-12 px-5">
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Eventos</span>
              <div className="flex flex-col gap-5 text-center">
                <p className="text-3xl">Workshops</p>
                <p>Junte-se a nós em eventos envolventes, criados para apoiar e conectar famílias de crianças com necessidades especiais.</p>
              </div>
            </div>

            <div className="flex  overflow-x-auto gap-8">
              <div className="flex flex-col gap-4 border min-w-72 border-[#0B010526] rounded-sm p-6 pb-14">
                <div className="flex gap-4 items-center text-sm leading-5">
                  <span>Data: 05/04/2025</span>
                  <span className="py-1 px-2.5 rounded-sm font-semibold border border-[#0B010526]">Coming soon</span>
                </div>
                <span className="text-xl">Sessões de Cinema Inclusivo</span>
                <p> O projeto visa proporcionar uma
                  experiência cinematográfica
                  inclusiva para pessoas com
                  deficiência. A justificativa para esse
                  projeto está na importância da
                  inclusão social, na igualdade de
                  oportunidades de lazer e na
                  necessidade de conscientização
                  sobre as barreiras enfrentadas por
                  pessoas com deficiência em
                  atividades cotidianas.</p>
              </div>

              <div className="flex flex-col gap-4 min-w-72 border border-[#0B010526] rounded-sm p-6 pb-14">
                <div className="flex gap-4 items-center text-sm leading-5">
                  <span>Data: 05/04/2025</span>
                  <span className="py-1 px-2.5 rounded-sm font-semibold border border-[#0B010526]">Coming soon</span>
                </div>
                <span className="text-xl"> Vínculo Inabalável</span>
                <p> O projeto possui como objetivo
                  criar um ambiente inclusivo e
                  acolhedor onde pessoas com
                  deficiência possam construir
                  relacionamentos significativos.
                  Com o intuito de desenvolver
                  laços sociais e desfrutar de
                  atividades que promovam o bem
                  estar emocional adjunto a
                  interação. </p>
              </div>

              <div className="flex flex-col gap-4 min-w-72 border border-[#0B010526] rounded-sm p-6 pb-14">
                <div className="flex gap-4 items-center text-sm leading-5">
                  <span>Data: 05/04/2025</span>
                  <span className="py-1 px-2.5 rounded-sm font-semibold border border-[#0B010526]">Coming soon</span>
                </div>
                <span className="text-xl">  Dia das Crianças Inclusivo</span>
                <p> O projeto busca celebrar não
                  apenas a diversão das crianças em
                  termos de habilidades, mas também
                  em termos de origens culturais,
                  socioeconômica e étnica. Esse
                  movimento sensibiliza a sociedade
                  para as necessidades e os direitos
                  das crianças com circunstâncias
                  distintas.</p>
              </div>

              <div className="flex flex-col gap-4 min-w-72 border border-[#0B010526] rounded-sm p-6 pb-14">
                <div className="flex gap-4 items-center text-sm leading-5">
                  <span>Data: 05/04/2025</span>
                  <span className="py-1 px-2.5 rounded-sm font-semibold border border-[#0B010526]">Coming soon</span>
                </div>
                <span className="text-xl">Empoderando a Inclusão</span>
                <p>  O projeto busca conscientizar sobre
                  os direitos, desafios e
                  conquistas das pessoas com
                  deficiência. Através de uma série de
                  atividades e eventos,
                  pretendemos fortalecer a voz das
                  pessoas com deficiência, estimular a
                  reflexão da sociedade e
                  avançar em direção a uma
                  sociedade mais inclusiva.</p>
              </div>

              <div className="flex flex-col gap-4 min-w-72 border border-[#0B010526] rounded-sm p-6 pb-14">
                <div className="flex gap-4 items-center text-sm leading-5">
                  <span>Data: 05/04/2025</span>
                  <span className="py-1 px-2.5 rounded-sm font-semibold border border-[#0B010526]">Coming soon</span>
                </div>
                <span className="text-xl">Natal Para Todos</span>
                <p>  Um encontro especial e reservado
                  com o Papai Noel e as crianças e
                  jovens com TEA do Instituto Fórum de
                  Famílias Especiais, no Shopping Nova
                  Iguaçu, e Nova Iguaçu. Os convidados
                  especiais irão desfrutar de um
                  ambiente calmo e tranquilo, sem a
                  habitual agitação típica da época
                  natalina, perfeito para um momento
                  inesquecível.
                </p>
              </div>
            </div>
          </div>

          {/*Donates & Get involved*/}
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

          {/*Support*/}
          <div className="min-h-screen w-screen py-12 px-5 text-white bg-[#1414A2]">
            <div className="flex flex-col gap-5">
              <span className="text-4xl">Conectando Famílias, Apoiando umas às Outras</span>
              <p>Junte-se à nossa comunidade e encontre apoio para a jornada única da sua família.</p>
            </div>

            <div className="flex flex-col gap-10 py-12">
              <div className="flex flex-col gap-4">
                <span className="text-base leading-6 font-semibold">Links</span>
                <ul className="flex flex-col gap-4 text-sm leading-5">
                  <li><a href="#">Home Page</a></li>
                  <li><a href="#">Nossa Missão</a></li>
                  <li><a href="#">Involva-se</a></li>
                  <li><a href="#">Calendario de Eventos</a></li>
                  <li><a href="#">Contate-nos</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-base leading-6 font-semibold">Recursos</span>
                <ul className="flex flex-col gap-4 text-sm leading-5">
                  <li><a href="#">Grupos de Apoio</a></li>
                  <li><a href="#">Artigos de Apoio</a></li>
                  <li><a href="#">Eventos da IFFA</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-base leading-6 font-semibold">Faça Parte da IFFA</span>
                <ul className="flex flex-col gap-4 text-sm leading-5">
                  <li><a href="#">Voluntariar-se Hoje</a></li>
                  <li><a href="#">Doe Agora</a></li>
                  <li><a href="#">Compartilhe Sua Historia</a></li>
                  <li><a href="#">Juntesse a Nós</a></li>
                  <li><a href="#">Trabalho Advogado</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-base leading-6 font-semibold">Proximos Eventos</span>
                <ul className="flex flex-col gap-4 text-sm leading-5">
                  <li><a href="#">Family Support Network</a></li>
                  <li><a href="#">Apoio para os Pais</a></li>
                  <li><a href="#">Workshops e Seminarios</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-base leading-6 font-semibold">Contate-nos</span>
                <ul className="flex flex-col gap-4 text-sm leading-5">
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Ligue para Nós</a></li>
                  <li><a href="#">Visite Nossas Redes Sociais</a></li>
                  <li><a href="#">Politica de Privacidade</a></li>
                </ul>
              </div>
            </div>

            {/*Footer*/}
          <footer className="flex flex-col gap-4 pt-12 pb-16 text-white bg-[#1414A2]">
            <div className="flex gap-3">
              <img src="/facebook.svg" alt="Facebook Logo" className="size-6" />
              <img src="/instagram.svg" alt="Instagram Logo" className="size-6" />
              <img src="/x.svg" alt="X Logo" className="size-6" />
              <img src="/linkedIn.svg" alt="LinkedIn Logo" className="size-6" />
              <img src="/youtube.svg" alt="Youtube Logo" className="size-6" />
            </div>
            <div>
              <p>© 2024 IFFA. All rights reserved.</p>
            </div>
          </footer>
          </div>

        </div>
      </div>
    </div>
  );
}
