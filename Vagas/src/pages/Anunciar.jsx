import {useState} from "react";
import { IoMdMegaphone } from "react-icons/io";
import { InputNumber } from 'antd';
export default function Anunciar() {

    const [titulo,setTitulo] = useState("");
    const [detalhes,setDetalhes] = useState("");
    //const [valores,setValores] = useState(50);
    //const [prazo,setPrazo] = useState(null);
    //const [autor,setAutor] = useState("");

    async function handleDataAnunciar(e){
        e.preventDefault();

        const formData = {
            titulo:titulo,
            detalhes:detalhes,
            //valores:valores,
            //prazo:prazo,
            //autor:autor
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

    const onChange = (value) => {
        console.log('changed', value);
    };

  return (
    <div className="flex justify-center items-center py-2 lg:w-[30%] w-full">
        <div className="">
            <form className="flex flex-col gap-2 lg:w-[350px] w-full p-3 border dark:border-zinc-800 border-zinc-200" onSubmit={handleDataAnunciar}>
                <input className="dark:bg-black dark:text-white dark:placeholder-white outline-none font-bold text-xl border-b border-zinc-200 placeholder-zinc-800" type="text" name="" id="" placeholder="Título" onChange={(e)=>setTitulo(e.target.value)}/>
                <textarea className="resize-none p-2 font-normal text-sm border dark:bg-black dark: border-zinc-200 outline-none dark:border-zinc-800 dark:placeholder-zinc-300 dark:text-white" name="" id="" cols="30" rows="10" placeholder="Detalhes do projeto" onChange={(e)=>setDetalhes(e.target.value)}>
                    
                </textarea>
                <div className="flex items-center justify-between gap-3 ">
                    <div className="flex items-center justify-center w-full">
                        <label className="flex items-center gap-1 w-full dark:text-white" htmlFor="">
                            <span>Verba:</span>
                            <div className="flex justify-start gap-2 items-center">
                                <InputNumber
                                min={50}
                                max={100000}
                                defaultValue={100}
                                formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="flex justify-center py-1 gap-2 items-center w-auto bg-black px-3 text-white dark:text-black font-bold rounded-[3px] cursor-pointer dark:bg-white">
                        <IoMdMegaphone/>
                        <input className=" " type="submit" value="Anúnciar" />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
