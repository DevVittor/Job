import Card from "../components/Card";
import DarkMode from "../components/DarkMode";
import Anunciar from "./Anunciar";

export default function Inicio() {

  return (
    <main>
      <section>
        <div className="flex justify-between w-full flex-wrap items-center px-3 py-5 bg-white dark:bg-black">
          <div className="flex flex-col justify-center items-center gap-2 lg:w-[70%]">
            <DarkMode/>
            <h1 className="font-extrabold text-5xl text-center leading-[45px] dark:text-white">Freelancer Profissionais</h1>
            <p className="text-center 2xl:w-[80%] lg:w-[75%] sm:w-[90%] w-full leading-[18px] text-[15px] dark:text-zinc-200 font-normal text-zinc-500">Aqui tanto o cliente quanto o freelancer tem o contato mais rápido simples e seguro do Brasil, você precisa apenas digitar o que um freelancer precisa fazer o freelancer ver a média de preço que você deseja gastar e o freelancer entra em contato com você ou por email ou pelo whatsapp.</p>
            <div className="flex justify-center items-center gap-3 pt-2">
              <button className="px-3 border border-zinc-200 dark:text-white font-normal text-base">Criar Conta</button>
              <button  className="px-3 border border-zinc-200 dark:bg-white dark:text-black bg-black text-white font-semibold text-base">Acessar Conta</button>
            </div>
          </div>
          <Anunciar/>
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
