'use client'

import Link from "next/link";
import { FaGithub } from 'react-icons/fa'
import { useEffect , useState} from "react"

import { HiOutlineSun, HiMoon } from "react-icons/hi"

export default function Navbar() {
    const [dark, setDark] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.theme == 'dark') {
            setDark(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    function changeTheme() {
        if (dark) {
            localStorage.theme = ""
            document.documentElement.classList.remove("dark")
        } else {
            localStorage.theme = "dark"
            document.documentElement.classList.add("dark")
        }
        setDark(!dark)
    }

    return (
        <nav className="flex justify-between items-center px-8 py-6 md:py-10 md:px-14 sticky top-0 dark:bg-neutral-900 bg-white">
            <Link href="/" className="text-lg md:text-2xl font-bold p-2">AOT API</Link>
            <div className="flex items-center font-bold md:text-xl">
                <Link href="/docs" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md">Docs</Link>
                <Link href="/about" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md">About</Link>
                <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md">
                    <FaGithub className="text-xl md:text-3xl"/>
                </a>
                <button
                    onClick={changeTheme}
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md"
                >
                    {
                        dark ? <HiOutlineSun className="text-2xl"/> : <HiMoon className="text-2xl"/>
                    }
                </button>
            </div>
        </nav>
    )
}