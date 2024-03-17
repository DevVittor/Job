import { useState } from "react"

export default function Register() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleDataRegister(e){
        e.preventDefault();
        const formData = {
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
    <main>
        <section>
            <div className="">
                <div className="">
                    <form onSubmit={handleDataRegister}>
                        <input type="email" name="" id="" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" name="" id="" placeholder="******" onChange={(e)=> setPassword(e.target.value)}/>
                        <input type="submit" value="Registrar" />   
                    </form>
                </div>
            </div>
        </section>
    </main>
  )
}
