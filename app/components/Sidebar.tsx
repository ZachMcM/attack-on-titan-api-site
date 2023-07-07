'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const resourceList = [
    "Characters",
    "Episodes",
    "Locations",
    "Organizations",
    "Titans"
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="hidden border-r md:w-1/4 border-zinc-800 lg:w-1/5 p-10 md:flex flex-col space-y-1 overflow-y-auto">
            <Link href={`/docs`} className={`${pathname == "/docs" ? "text-sky-400 bg-sky-900/40" : "text-zinc-400" } py-1.5 px-4 rounded-md`}>Intro</Link>
            <Link href={`/docs/characters`} className={`${pathname == "/docs/characters" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Characters</Link>
            <Link href={`/docs/episodes`} className={`${pathname == "/docs/episodes" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300 py-1.5 px-4 rounded-md`}>Episodes</Link>
            <Link href={`/docs/locations`} className={`${pathname == "/docs/locations" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Locations</Link>
            <Link href={`/docs/organizations`} className={`${pathname == "/docs/organizations" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Organizations</Link>
            <Link href={`/docs/titans`} className={`${pathname == "/docs/titans" ? "text-sky-400 bg-sky-900/40" : "hover:bg-zinc-800 text-zinc-400" } duration-300  py-1.5 px-4 rounded-md`}>Titans</Link>
        </div>
    )
}
