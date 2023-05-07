import { FaGithub } from "react-icons/fa"
import { BiCode } from "react-icons/bi"

export default function Footer() {
    return (
        <footer className="flex justify-between pt-10 mt-20 border-t">
            <div className="flex space-x-1 items-center">
                <BiCode className="text-xl"/>
                <p>by <a href="https://github.com/ZachMcM" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Zach McMullen</a></p>
            </div>
        <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:text-fuchsia-500 flex space-x-3 items-center"><FaGithub className="text-3xl"/></a>
    </footer>
    )
}