import { FaGithub } from "react-icons/fa"
import { BiCode } from "react-icons/bi"

export default function Footer() {
    return (
        <footer className="flex justify-between mt-20 p-5 border-t border-zinc-800 text-xs">
            <div className="flex space-x-1 items-center">
                <BiCode className="text-xl"/>
                <p>by <a href="https://github.com/ZachMcM" className="hover:opacity-80 text-sky-400 duration-300">Zach McMullen</a></p>
            </div>
            <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:text-sky-400 duration-300 flex space-x-3 items-center"><FaGithub className="text-xl"/></a>
        </footer>
    )
}