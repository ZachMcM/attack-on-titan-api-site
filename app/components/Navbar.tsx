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
        <nav className="flex justify-between items-center px-10 py-8 md:py-10 md:px-14 sticky top-0 dark:bg-neutral-900 bg-white">
            <Link href="/" className="text-lg md:text-2xl font-bold">AOT API</Link>
            <div className="flex space-x-3.5 md:space-x-8 items-center font-bold md:text-xl">
                <Link href="/docs" className="hover:opacity-80">Docs</Link>
                <Link href="/about" className="hover:opacity-80">About</Link>
                <a href="https://github.com/ZachMcM/attack-on-titan-api" className="hover:opacity-80">
                    <FaGithub className="text-xl md:text-3xl"/>
                </a>
                <button
                    onClick={changeTheme}
                    className="hover:opacity-80"
                >
                    {
                        dark ? <HiOutlineSun className="text-2xl"/> : <HiMoon className="text-2xl"/>
                    }
                </button>
            </div>
        </nav>
    )
}