export function Support3() {
    return (
        <footer
            id="support3"
            className="w-full bg-[#1414A2] text-white pt-16 pb-10 px-6 lg:px-20"
        >
            {/* Cabeçalho */}
            <div className="max-w-7xl mx-auto flex flex-col gap-6 border-b border-white/20 pb-12 lg:pb-16">
                <h2 className="font-jost text-4xl lg:text-6xl leading-tight">
                    Conectando Famílias, Apoiando umas às Outras
                </h2>
                <p className="font-ibm text-base lg:text-lg text-white/90 max-w-xl">
                    Junte-se à nossa comunidade e encontre apoio para a jornada única da sua família.
                </p>
            </div>

            {/* Grupos de Links */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pt-12 lg:pt-20 font-ibm">

                {/* COLUNA */}
                <div className="flex flex-col gap-4">
                    <span className="text-base font-semibold tracking-wide">Links</span>
                    <ul className="flex flex-col gap-3 text-sm text-white/80">
                        <FooterLink label="Home Page" href="#welcome" />
                        <FooterLink label="Nossa Missão" href="#" />
                        <FooterLink label="Envolva-se" href="#" />
                        <FooterLink label="Calendário de Eventos" href="#workshop" />
                        <FooterLink label="Contate-nos" href="#" />
                    </ul>
                </div>

                {/* COLUNA */}
                <div className="flex flex-col gap-4">
                    <span className="text-base font-semibold tracking-wide">Recursos</span>
                    <ul className="flex flex-col gap-3 text-sm text-white/80">
                        <FooterLink label="Grupos de Apoio" href="https://chat.whatsapp.com/HsCoNRw2wmS9RdnNvfqbi5" />
                        <FooterLink label="Eventos da IFFA" href="#workshop" />
                    </ul>
                </div>

                {/* COLUNA */}
                <div className="flex flex-col gap-4">
                    <span className="text-base font-semibold tracking-wide">Faça Parte da IFFA</span>
                    <ul className="flex flex-col gap-3 text-sm text-white/80">
                        <FooterLink label="Junte-se a Nós" href="https://www.atados.com.br/ong/instituto-forum-de-familias-atipicas-323239/vagas" />
                        <FooterLink label="Doe Agora" href="https://www.vakinha.com.br/5228021" />
                        <FooterLink label="Compartilhe Sua História" href="#" />
                        <FooterLink label="Trabalho Voluntário" href="#" />
                    </ul>
                </div>

                {/* COLUNA */}
                <div className="flex flex-col gap-4">
                    <span className="text-base font-semibold tracking-wide">Próximos Eventos</span>
                    <ul className="flex flex-col gap-3 text-sm text-white/80">
                        <FooterLink label="Family Support Network" href="#" />
                        <FooterLink label="Apoio para Pais" href="#" />
                        <FooterLink label="Workshops e Seminários" href="#workshop" />
                    </ul>
                </div>

                {/* COLUNA */}
                <div className="flex flex-col gap-4">
                    <span className="text-base font-semibold tracking-wide">Contate-nos</span>
                    <ul className="flex flex-col gap-3 text-sm text-white/80">
                        <FooterLink label="Email" href="#" />
                        <FooterLink label="Ligue para Nós" href="#" />
                        <FooterLink label="Nossas Redes Sociais" href="https://www.instagram.com/forumdefamiliasatipicas/" />
                    </ul>
                </div>

            </div>
        </footer>
    );
}

type FooterLinkProps = {
  label: string;
  href: string;
};

export function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-white transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );
}
