'use client'

import Link from "next/link";
import { FaBars, FaGithub } from 'react-icons/fa'
import { TbX } from "react-icons/tb"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react";

export default function Navbar() {
    const pathname = usePathname()
    console.log(pathname)

    const [mobileSidebar, setMobileSidebar] = useState<boolean>(false)

    return (
        <nav className="flex justify-between items-center px-4 h-16 border-zinc-800 md:px-14 border-b">
            <Link href="/" className="text-lg font-medium p-2">Attack on Titan API</Link>
            <div className="flex items-center">
                <Link href="/docs" className={`hover:text-white duration-300 p-2 md:p-3.5 rounded-md ${pathname == '/docs' ? "text-white" : "text-zinc-400"}`}>Docs</Link>
                <Link href="/about" className={`hover:text-white duration-300 p-2 md:p-3.5 rounded-md ${pathname == '/about' ? "text-white" : "text-zinc-400"}`}>About</Link>
                <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:text-white text-zinc-400 duration-300 p-2 md:p-3.5 rounded-md">
                    <FaGithub className="text-xl md:text-3xl"/>
                </a>
            </div>
            <div className="md:hidden">{ !mobileSidebar && <MobileButton setMobileSidebar={setMobileSidebar}/> }</div>
            <MobileMenu mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSidebar}/>
        </nav>
    )
}

function MobileButton({ setMobileSidebar }: { setMobileSidebar: Dispatch<SetStateAction<boolean>> }) {
    return (
        <button 
            onClick={() => setMobileSidebar(true)}
            className="bg-zinc-800 drop-shadow-lg rounded-full p-2.5 fixed right-0 bottom-0 mx-10 mb-5">
            <FaBars/>
        </button>
    )
}

function MobileMenu({ setMobileSidebar, mobileSidebar }: { setMobileSidebar: Dispatch<SetStateAction<boolean>>, mobileSidebar: boolean }) {
    const pathname = usePathname()

    return (
        <div className={`bg-zinc-950 flex flex-col space-y-3 inset-0 w-full left-0 fixed h-fit border-b border-zinc-800 top-0 p-3 ${mobileSidebar ? "translate-y-0" : "-translate-y-full"} duration-300`}>
            <button
                className="absolute top-0 right-0 text-zinc-400 hover:text-white duration-300 m-5"
                onClick={() => setMobileSidebar(false)}
            >
                <TbX className="text-lg"/>
            </button>
            <h3 className="text-lg font-medium py-1.5 px-4">Attack on Titan API</h3>
            <div className="flex flex-col space-y-1">
                <Link href={`/docs`} className={`${pathname == "/docs" ? "text-sky-400 bg-sky-900/40" : "text-zinc-400" } py-1.5 px-4 rounded-md`}>Intro</Link>
                <Link href={`/docs/characters`} className={`${pathname == "/docs/characters" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Characters</Link>
                <Link href={`/docs/episodes`} className={`${pathname == "/docs/episodes" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300 py-1.5 px-4 rounded-md`}>Episodes</Link>
                <Link href={`/docs/locations`} className={`${pathname == "/docs/locations" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Locations</Link>
                <Link href={`/docs/organizations`} className={`${pathname == "/docs/organizations" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Organizations</Link>
                <Link href={`/docs/titans`} className={`${pathname == "/docs/titans" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Titans</Link>
             </div>
        </div>
    )
}