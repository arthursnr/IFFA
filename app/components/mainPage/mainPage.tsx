"use client"

import { useEffect } from "react";
import { Header } from "../header/header";
import { Donate } from "./donate/donate";
import { Footer } from "./footer/footer";
import { Principios } from "./principios/principios";
import { Support } from "./support/support";
import { Support2 } from "./support/support2";
import { Support3 } from "./support/support3";
import { Welcome } from "./welcome/welcome";
import { Workshop } from "./workshops/workshop";
import { DireitosPage }from "./direitos/direitos";

export function MainPage() {

    useEffect ( () =>{
        document.body.style.overflowX = "hidden";
      })

    return (
        <div className="">
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

                {/*Principios ----------------> RESOLVER A FORMATAÇÃO DOS OBJETIVOS, O LADO ESQUERDO ESTA FICANDO FORA DA TELA */}
                <Principios />

                {/*Direitos*/}
                <DireitosPage />

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
    )
}