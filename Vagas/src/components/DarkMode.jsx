import {useState,useEffect} from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function DarkMode() {
    const [theme,setTheme] = useState(null);
    useEffect(()=>{
        if(window.matchMedia("(prefers-color-scheme:light)").matches){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    },[]);


    useEffect(()=>{
        if(theme=== "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[theme]);

    function handleTheme(){
        setTheme(theme === "dark" ? "light" : "dark");
}

return (
    <button
    onClick={handleTheme}
    className="absolute top-[35px] left-0 h-[25px] flex justify-center items-center pr-4 pl-3 py-0 rounded-r-[30px] bg-black text-white font-sm font-bold dark:bg-white dark:text-black"
  >
    {theme === "dark" ? <IoSunny /> : <IoIosMoon />}
  </button>
  );
}
