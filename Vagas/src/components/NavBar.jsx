import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

export default function NavBar() {

    const [login,setLogin] = useState(false);

    useEffect(()=>{
        const loginFeito = localStorage.getItem("Token");
        if(loginFeito){
            setLogin(true);
        }else{
            setLogin(false);
        }
    },[])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
        <div className="flex items-center justify-between flex-wrap px-3 py-1 border-b-2 border-zinc-200 dark:border-zinc-800  relative">
            <div className="">
            <Link to={"/"}><h1 className="dark:text-white text-2xl font-bold">Vagas</h1></Link>
            </div>
            <div className="flex items-center gap-3">
                
                {login ? (
                    <>
                        <nav>
                            <ul className="flex items-center gap-2">
                                <li><Link className="dark:text-white text-sm font-semibold" to="/">Inicio</Link></li>
                                <li><Link className="dark:text-white text-sm font-semibold" to="/">Planos</Link></li>
                            </ul>
                        </nav>
                        <button className="px-2.5 py-0 border border-black dark:border-white dark:bg-white dark:text-black bg-black font-bold text-sm text-white rounded-[3px]">30 Interações </button>
                    </>
                ):(
                    <>
                        <Link className="px-3 border dark:text-white border-zinc-200 font-normal text-sm" to="/#">Criar Conta</Link>
                        <Link className="border dark:bg-white dark:text-black border-black font-bold bg-black text-white text-sm px-3 " to="/#">Acessar Conta</Link>
                    </>
                )}
            </div>
        </div>
    </header>
  )
}
