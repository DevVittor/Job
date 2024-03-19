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
    } catch (error) {
      console.log(`Não deu para resgatar nada para o login. ${error}`);
    }

  }
  return (
    <form onSubmit={handleDataLogin}>
      <input type="email" placeholder="My Email" onChange={handleEmail}/>
      <input type="password" placeholder="****" onChange={handlePassword}/>
      <input type="submit" value="Login" />
    </form>
  )
}
