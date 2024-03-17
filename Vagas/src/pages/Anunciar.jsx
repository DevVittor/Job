import {useState} from "react";
export default function Anunciar() {

    const [titulo,setTitulo] = useState("");
    const [detalhes,setDetalhes] = useState("");
    const [valores,setValores] = useState(null);
    const [prazo,setPrazo] = useState(null);
    const [autor,setAutor] = useState("");

    async function handleDataAnunciar(e){
        e.preventDefault();

        const formData = {
            titulo:titulo,
            detalhes:detalhes,
            valores:valores,
            prazo:prazo,
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
    <form onSubmit={handleDataAnunciar}>
        <input type="text" name="" id="" placeholder="Title" onChange={(e)=>setTitulo(e.target.value)}/>
        <input type="text" name="" id="" placeholder="Detalhes" onChange={(e)=>setDetalhes(e.target.value)}/>
        <input type="number" name="" id="" placeholder="valores" onChange={(e)=>setValores(e.target.value)}/>
        <input type="number" name="" id="" placeholder="prazo" onChange={(e)=>setPrazo(e.target.value)}/>
        <input type="text" name="" id="" placeholder="Autor" onChange={(e)=>setAutor(e.target.value)}/>
        <input type="submit" value="Anúnciar" />
    </form>
  )
}
