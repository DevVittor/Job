export default function Planos() {
  return (
    <main>
      <section>
        <div className="flex items-center gap-2 dark:bg-black justify-center absolute inset-0 px-5">
          <div className="flex flex-col justify-center items-center w-[250px] px-3 py-2 dark:bg-white dark:text-black bg-black text-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Plano Gratuito</h2>
            <span className="-mt-2">30 interações</span>
            <p className="pb-2 text-center leading-4 font-light text-zinc-200 dark:text-black text-base">Você pelo menos com 1 pessoa por dia você consegue entrar em contato.</p>
            <button className="py-1 px-3 bg-white dark:bg-black dark:text-white text-black font-bold text-base rounded-[3px]">Selecionado</button>
          </div>
          <div className="flex flex-col justify-center items-center w-[250px] px-3 py-2 dark:bg-white dark:text-black bg-black text-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Plano Amador</h2>
            <span className="-mt-2">150 interações</span>
            <p className="pb-2 text-center leading-4 font-light text-zinc-200 dark:text-black text-base">Recomendado para quem deseja entrar em contato com mais propostas por mês gastando pouco por mês</p>
            <button className="py-1 px-3 bg-white dark:bg-black dark:text-white text-black font-bold text-base rounded-[3px]">R$ 9,90/Mês</button>
          </div>
          <div className="flex flex-col justify-center items-center w-[250px] px-3 py-2 dark:bg-white dark:text-black bg-black text-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Plano Profissional</h2>
            <span className="-mt-2">Interações Ilimitadas</span>
            <p className="pb-2 text-center leading-4 font-light text-zinc-200 dark:text-black text-base">Ideal para quem já está levando a sério o fato de ser freelancer e deseja viver disso.</p>
            <button className="py-1 px-3 bg-white dark:bg-black dark:text-white text-black font-bold text-base rounded-[3px]">R$ 49,90/Mês</button>
          </div>
        </div>
      </section>
    </main>
  )
}
