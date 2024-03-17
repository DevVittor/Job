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
  
      await fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      .then(()=>{
        console.log(`O login foi feito com sucesso!`)
      }).catch((error)=>{
        console.log(`Não foi possível fazer login. ${error}`);
      })
    } catch (error) {
      console.log(`Não deu para resgatar nada para o login. ${error}`);
    }

  }
  return (
    <form onSubmit={handleDataLogin}>
      <input type="email" name="" id="" placeholder="My Email" onChange={handleEmail}/>
      <input type="password" name="" id="" placeholder="****" onChange={handlePassword}/>
      <input type="submit" value="Login" />
    </form>
  )
}
