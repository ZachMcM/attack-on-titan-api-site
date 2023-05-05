import Link from "next/link";
import { FaGithub } from 'react-icons/fa'
import { HiOutlineSun, HiMoon } from "react-icons/hi"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-6 md:py-10 md:px-14 bg-white border-b">
            <Link href="/" className="md:text-2xl font-bold p-2">Attack on Titan API</Link>
            <div className="flex items-center font-bold md:text-xl">
                <Link href="/docs" className="hover:bg-neutral-100 p-2 md:p-3.5 rounded-md">Docs</Link>
                <Link href="/about" className="hover:bg-neutral-100 p-2 md:p-3.5 rounded-md">About</Link>
                <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:bg-neutral-100 p-2 md:p-3.5 rounded-md">
                    <FaGithub className="text-xl md:text-3xl"/>
                </a>
            </div>
        </nav>
    )
}