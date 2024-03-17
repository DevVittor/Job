import Card from "../components/Card";

export default function Inicio() {
  return (
    <main>
      <section>
        <div className="flex justify-center items-center px-3 py-5 bg-white dark:bg-black">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-extrabold text-5xl dark:text-white">Freelancer Profissionais</h1>
            <p className="text-center w-[55%] leading-[18px] text-[15px] dark:text-zinc-200 font-normal text-zinc-500">Aqui tanto o cliente quanto o freelancer tem o contato mais rápido simples e seguro do Brasil, você precisa apenas digitar o que um freelancer precisa fazer o freelancer ver a média de preço que você deseja gastar e o freelancer entra em contato com você ou por email ou pelo whatsapp.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 dark:bg-black bg-white gap-2 pb-5 px-3">
          {Array.from({length:40}).map((_,index)=>(
            <Card key={index}/>
          ))}
        </div>
      </section>
    </main>
  )
}
