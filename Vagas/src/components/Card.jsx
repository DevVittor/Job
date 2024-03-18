import { FaCommentsDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
export default function Card() {
  return (
    <div className="dark:bg-black dark:text-white bg-white px-3 py-1 border border-zinc-200 h-auto w-auto">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-normal text-sm">Publicado: 15/02/2024</span>
            <span className="flex items-center gap-1 font-normal text-sm"><FaEye/>243</span>
          </div>
          <h2 className="font-bold text-2xl">Loja de Roupas</h2>
          <p className="font-normal text-zinc-500 dark:text-zinc-300 leading-[18px] text-[15px]">Eu quero uma loja de roupas que tenha pagamentos em pix boleto e cartão de crédito e débito e que faça o calculo dos correios e que eu consiga mexer sem a ajudar de ninguém pois não me interessa pagar por manutenção mensal para o criado do site</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-base">Verba:</h3>
              <span className="font-normal text-sm">R$ 400 reais</span>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-base">Prazo:</h3>
              <span className="font-normal text-sm">15 dias</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-2">
            <button className="flex items-center gap-2 px-3 py-1 rounded-[3px] shadow-md bg-black dark:bg-white  dark:text-black text-white font-bold text-sm">
              <FaCommentsDollar/>
              Conversar
            </button>
          </div>
        </div>
    </div>
  )
}
