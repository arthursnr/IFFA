import { NavMenu } from "./components/buttons/NavMenu";
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
        <header className="bg-[#5E5EDA] flex items-center justify-between px-4 py-2 w-full">
          <img src="/logoIFFA_2(branca).png" alt="Logo da IFFA" className="w-24 h-24 object-contain" />
          <NavMenu />
        </header>

      </div>

      <div>
        {/*Welcome Page*/}
        <Welcome />

        {/*Support Page*/}
        <Support />

        {/*Support2*/}
        <Support2 />

        {/*Relatos*/}
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
