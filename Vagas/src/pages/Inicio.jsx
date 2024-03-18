import { useState } from "react";
import Card from "../components/Card";
import { FaSearchDollar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
export default function Inicio() {
  const [filter,setFilter] = useState(false);

  function openFilter(){
    setFilter(!filter);
  }

  return (
    <main>
      <section>
        <div className="flex justify-center items-center px-3 py-5 bg-white dark:bg-black">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-extrabold text-5xl text-center leading-[45px] dark:text-white">Freelancer Profissionais</h1>
            <p className="text-center 2xl:w-[50%] lg:w-[55%] sm:w-[90%] w-full leading-[18px] text-[15px] dark:text-zinc-200 font-normal text-zinc-500">Aqui tanto o cliente quanto o freelancer tem o contato mais rápido simples e seguro do Brasil, você precisa apenas digitar o que um freelancer precisa fazer o freelancer ver a média de preço que você deseja gastar e o freelancer entra em contato com você ou por email ou pelo whatsapp.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center border-none dark:bg-black bg-white">
          <div className="flex items-center justify-between bg-white dark:bg-black gap-2 border rounded-full h-[30px] w-auto border-zinc-200 px-3 ">
            <FaSearchDollar className="text-zinc-400 dark:text-zinc-200 text-sm"/>
            <input className="dark:bg-black dark:text-white border-none bg-white outline-none font-normal text-base placeholder-zinc-200" type="search" name="" id="" placeholder="Buscar frellancer"/>
            {filter ? <MdFilterListOff className="cursor-pointer dark:text-zinc-200" onClick={openFilter}/> : <MdFilterList className="cursor-pointer dark:text-zinc-200" onClick={openFilter}/>}
          </div>
        </div>
      </section>
      <section> 
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 dark:bg-black bg-white gap-2 py-5 px-3">
          {Array.from({length:40}).map((_,index)=>(
            <Card key={index}/>
          ))}
        </div>
      </section>
    </main>
  )
}
