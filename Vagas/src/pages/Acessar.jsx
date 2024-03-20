import {useState} from "react";
export default function Acessar() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }

  async function handleDataLogin(e){

    e.preventDefault();
    try {
      const formData={
        email:email,
        password:password
      }
  
      const response = await fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      
      if (!response.ok) {
        throw new Error(`Erro ao fazer login: ${response.statusText}`);
      }

      const data = await response.json(); // Convertendo a resposta em JSON
      localStorage.setItem("Token",data.token);
      console.log(data.token); // Aqui você pode fazer o que quiser com os dados

      console.log("O login foi feito com sucesso!");
      window.location.reload();
    } catch (error) {
      console.log(`Não deu para resgatar nada para o login. ${error}`);
    }

  }
  return (
    <div className="flex flex-col gap-2 h-auto border border-black dark:bg-white bg-black w-auto px-3 py-2">
      <h2 className="text-xl font-bold text-white dark:text-black">Acessar Conta</h2>
      <form className="flex flex-col gap-1" onSubmit={handleDataLogin}>
        <label className="flex flex-col gap-1" htmlFor="">
          <span className="text-white dark:text-black font-medium text-sm">Email:</span>
          <input className="text-sm font-normal outline-none border border-zinc-200 px-2" type="email" placeholder="Email" onChange={handleEmail}/>
        </label>
        <label className="flex flex-col gap-1" htmlFor="">
          <span className="text-white dark:text-black text-sm font-medium">Senha:</span>
          <input className="font-normal text-sm border border-zinc-200 px-2 outline-none" type="password" placeholder="****" onChange={handlePassword}/>
        </label>
        <input className="mt-2 border border-zinc-200 dark:bg-black text-white cursor-pointer" type="submit" value="Acessar" />
      </form>
    </div>
  )
}
