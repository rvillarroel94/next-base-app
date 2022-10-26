import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "../utils/ThemeToggle"
import LocaleSwitcher from "../utils/LocaleSwitcher"

export const Nav = () => {
    return(
        <header>
            <nav className="flex bg-white h-20 items-center text-black text-lg justify-center">
                <Link href='/'><Image src="/logo.svg" alt="Alts" width={30} height={30}/></Link>
                <Link href='/'><span className="p-5 link">Inicio</span></Link>
                <Link href='/'><span className="p-5 link">Products</span></Link>
                <LocaleSwitcher />
                <ThemeToggle className="relative px-2 text-sm text-center py-2 ml-10 sm:ml-20 bg-gray-300 rounded-full dark:bg-gray-500 dark:text-black" monDark='text-gray-100 dark:text-black'/>
            </nav>
        </header>
    )
}