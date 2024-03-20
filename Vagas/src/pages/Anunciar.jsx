import {useState} from "react";
import { IoMdMegaphone } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
export default function Anunciar() {

    const [titulo,setTitulo] = useState("");
    const [detalhes,setDetalhes] = useState("");
    const [verba,setVerba] = useState(350);
    //const [prazo,setPrazo] = useState(null);
    const [autor,setAutor] = useState("");

    async function handleDataAnunciar(e){
        e.preventDefault();

        const formData = {
            titulo:titulo,
            detalhes:detalhes,
            valores:verba,
            //prazo:prazo,
            autor:autor
        }

        await fetch("http://localhost:3000/anunciar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(()=>{
            console.log(`Anuncio criado com sucesso!`);
        }).catch((error)=>{
            console.log(`Não consegui pegar os dados para criar o anúncio. ${error}`);
        })

    }

  return (
    <div className="flex justify-center items-center py-2 lg:w-[30%] w-full">
        <div className="">
            <form className="flex flex-col gap-2 lg:w-[350px] w-full p-3 border dark:border-zinc-800 border-zinc-200" onSubmit={handleDataAnunciar}>
                <input className="dark:bg-black dark:text-white dark:placeholder-white outline-none font-bold text-xl border-b border-zinc-200 placeholder-zinc-800" type="text" name="" id="" placeholder="Título" onChange={(e)=>setTitulo(e.target.value)}/>
                <textarea className="resize-none p-2 font-normal text-sm border dark:bg-black dark: border-zinc-200 outline-none dark:border-zinc-800 dark:placeholder-zinc-300 dark:text-white" name="" id="" cols="30" rows="10" placeholder="Detalhes do projeto" onChange={(e)=>setDetalhes(e.target.value)}></textarea>
                <div className="flex items-center justify-between gap-1 w-full">
                    <div className="flex items-center w-full border border-zinc-200">
                        <input className="px-2 dark:bg-black dark:placeholder-zinc-300 dark:text-white outline-none w-full text-sm" type="text" name="" id="" placeholder="Whatsapp"/>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <span className="bg-zinc-200 px-1.5 font-semibold text-sm border border-zinc-200">R$</span>
                        <input className="w-full pl-3 text-sm border border-zinc-200 dark:text-white  dark:placeholder-zinc-300 dark:bg-black  outline-none" type="number" name="" id="" placeholder="R$ 350"/>
                    </div>
                </div>
                <div className="flex justify-center border-none gap-2 items-center w-auto bg-black px-3 text-white dark:text-black font-bold cursor-pointer dark:bg-white">
                    <input className="px-3 py-1 text-sm" type="submit" value="Anúnciar" />
                </div>
            </form>
        </div>
    </div>
  )
}
