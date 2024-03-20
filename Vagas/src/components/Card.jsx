import { FaCommentsDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
export default function Card() {
  return (
    <div className="flex flex-col gap-1 py-2 px-3 dark:bg-black dark:text-white bg-white border border-zinc-200 h-auto w-auto">
      <div className="flex items-center justify-between">
        <span className="font-normal text-sm">Publicado: 15/02/2024</span>
        <span className="flex items-center gap-1 font-normal text-sm"><FaEye/>243</span>
      </div>
      <div className="flex flex-col leading-5">
        <h2 className="font-bold text-2xl whitespace-nowrap overflow-hidden text-ellipsis">Loja de Roupas apenas para jogadores de futebol</h2>
        <p className="font-normal text-zinc-500 dark:text-zinc-300 leading-[18px] text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio optio temporibus sunt deserunt id explicabo enim est, blanditiis accusantium praesentium quia quis excepturi vero et! Expedita dicta laborum perspiciatis molestias.</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-normal text-sm"><b>Autor:</b> Jéssica Gomes</span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <h3 className="font-semibold text-base">Verba:</h3>
          <span className="font-normal text-sm">R$ 400 reais</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <button className="flex items-center gap-2 px-3 py-1 rounded-[3px] shadow-md bg-black dark:bg-white  dark:text-black text-white font-bold text-sm">
          <FaCommentsDollar/>
          Negociar
        </button>
      </div>
    </div>
  )
}
