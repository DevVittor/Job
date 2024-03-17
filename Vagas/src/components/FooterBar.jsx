import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function FooterBar() {
  return (
    <footer>
        <div className="flex justify-between items-center flex-wrap border-t-2 dark:border-zinc-800 border-zinc-200 px-3 py-1 dark:bg-black dark:text-white">
            <div className="">
                <span className="font-normal text-sm">Todos os direitos reservados &copy;</span>
            </div>
            <div className="">
                <nav>
                    <ul className="flex items-center gap-2">
                        <li><Link to={`/#`} target="_blank"><FaFacebook/></Link></li>
                        <li><Link to={`/#`} target="_blank"><FaSquareXTwitter/></Link></li>
                        <li><Link to={`/#`} target="_blank"><FaInstagramSquare/></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
  )
}
