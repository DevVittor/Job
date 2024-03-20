import { useState } from "react"

export default function Register() {

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleDataRegister(e){
        e.preventDefault();
        const formData = {
            nome:nome,
            email:email,
            password:password
        }
        await fetch("http://localhost:3000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(()=>{
            console.log(`O response deu certo`);
        }).catch((error)=>{
            console.log(`Não foi possível registrar nada. ${error}`);
        })

    }

  return (
    <div className="flex flex-col gap-2 h-auto border border-black dark:bg-white bg-black w-auto px-3 py-2 ">
      <h2 className="text-xl font-bold text-white dark:text-black">Criar Conta</h2>
      <form className="flex flex-col gap-1" onSubmit={handleDataRegister}>
        <label className="flex flex-col gap-1" htmlFor="">
            <span className="text-sm font-medium dark:text-black text-white">Nome:</span>
            <input className="text-sm font-normal border border-zinc-200 outline-none px-2" type="text" name="" id="" placeholder="Nome" onChange={(e)=>setNome(e.target.value)}/>
        </label>
        <label className="flex flex-col gap-1" htmlFor="">
            <span className="text-sm font-medium dark:text-black text-white">Email:</span>
            <input className="text-sm font-normal border border-zinc-200 outline-none px-2" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className="flex flex-col gap-1" htmlFor="">
            <span className="text-sm font-medium dark:text-black text-white">Senha:</span>
            <input className="outline-none px-2 text-sm font-normal  border border-zinc-200" type="password" placeholder="****" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <input className="mt-2 border border-zinc-200 dark:bg-black text-white" type="submit" value="Criar Conta" />
      </form>
    </div>
  )
}
