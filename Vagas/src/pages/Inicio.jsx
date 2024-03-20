import { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import Card from "../components/Card";
import DarkMode from "../components/DarkMode";
import Anunciar from "./Anunciar";
import Acessar from "./Acessar";
import Register from "./Register";

export default function Inicio() {

  const [login,setLogin] = useState(false);

  useEffect(()=>{
    const loginCheck = localStorage.getItem("Token");
    loginCheck ? setLogin(true) : setLogin(false);
  },[])

  return (
    <main>
      <section>
        <div className="flex justify-center h-auto gap-5 w-full flex-wrap items-center px-3 py-3 bg-white dark:bg-black">
          <div className="flex flex-col justify-center items-center gap-2  lg:w-[60%]">
            <DarkMode/>
            <h1 className="font-extrabold text-5xl text-center leading-[45px] dark:text-white">Freelancer Profissionais</h1>
            <p className="text-center 2xl:w-[80%] lg:w-[75%] sm:w-[90%] w-full leading-[18px] text-[15px] dark:text-zinc-200 font-normal text-zinc-500">Aqui tanto o cliente quanto o freelancer tem o contato mais rápido simples e seguro do Brasil, você precisa apenas digitar o que um freelancer precisa fazer o freelancer ver a média de preço que você deseja gastar e o freelancer entra em contato com você ou por email ou pelo whatsapp.</p>
            <button className="mt-1 flex items-center gap-1 px-3 dark:bg-zinc-200 border border-zinc-200"><IoIosPlayCircle/>Apresentação</button>
          </div>
          <div className="flex items-center justify-center gap-2">
            {login ? (
              <Anunciar/>
            ):(
              <>
                <Register/>
                <Acessar/>
              </>
            )}
          </div>
        </div>
      </section>
      <section> 
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 dark:bg-black bg-white gap-2 pb-5 px-3">
          {Array.from({length:40}).map((_,index)=>(
            <Card key={index}/>
          ))}
        </div>
      </section>
    </main>
  )
}
