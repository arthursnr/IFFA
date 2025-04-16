import { Header } from "./components/header/header";
import { Donate } from "./components/mainPage/donate.tsx/donate";
import { Footer } from "./components/mainPage/footer/footer";
import { Relatos } from "./components/mainPage/relatos/relatos";
import { Support } from "./components/mainPage/support/support";
import { Support2 } from "./components/mainPage/support/support2";
import { Support3 } from "./components/mainPage/support/support3";
import { Welcome } from "./components/mainPage/welcome/welcome";
import { Workshop } from "./components/mainPage/workshops/workshop";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-[#5E5EDA]">
      <div className="text-white">
        <Header />
      </div>

      <div>
        {/*Welcome Page*/}
        <Welcome />

        {/*Support Page*/}
        <Support />

        {/*Support2 --------------> TERMINEI, COMEÇAR O PROXIMO*/}
        <Support2 />

        {/*Relatos ----------------> RESOLVER A FORMATAÇÃO DOS OBJETIVOS, O LADO ESQUERDO ESTA FICANDO FORA DA TELA */}
        <Relatos />

        {/*Workshops*/}
        <Workshop />

        <div className="bg-[#1414A2]">
          {/*Donates & Get involved*/}
          <Donate />

          {/*Support3*/}
          <Support3 />

          {/*Footer*/}
          <Footer />
        </div>

      </div>
    </div>
  );
}
