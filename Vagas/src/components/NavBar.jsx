import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
        <div className="flex items-center justify-between flex-wrap px-3 py-1 border-b-2 border-zinc-200 dark:border-zinc-800  relative">
            <div className="">
            <Link to={"/"}><h1 className="dark:text-white text-2xl font-bold">Vagas</h1></Link>
            </div>
            <div className="flex items-center gap-3">
                <Link className="dark:text-white" to={`/register`}>
                    Register
                </Link>
                <Link to={`/acessar`}>
                    <button className="px-2.5 py-0 border border-black dark:border-white dark:bg-white dark:text-black bg-black font-bold text-sm text-white">Acessar</button>
                </Link>
                <DarkMode/>
            </div>
        </div>
    </header>
  )
}
