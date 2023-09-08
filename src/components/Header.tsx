"use client"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();

    return (
        <div>
            {session?.user ? (
                    <>
                <>
                    <header className="text-gray-600  sticky top-0 bg-white z-10 ">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky top-0">
                            <div className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
<Link href="/sys">
                                        <span className="ml-3 text-xl  text-rose-900">Clínica de la Mujer</span>
                                        </Link>
                            </div>
                            <nav
                                className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  text-rose-900 flex flex-wrap items-center text-base justify-center">
                                <Link className="mr-5 hover:text-pink-rose-950 hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/sys/dashboard">Dashboard</Link>
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/sys/dashboard/pacientes">Pacientes</Link>
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/sys/dashboard/procedimientos">Procedimientos</Link>
                            </nav>
                            <button
                                onClick={() => signOut()}
                                className="inline-flex items-center
                    bg-white border-0 py-1 px-3 focus:outline-none hover:bg-rose-700 rounded text-base mt-4 md:mt-0 text-rose-900 hover:text-white">Cerrar Sesión

                            </button>
                        </div>
                    </header>
                </>
                <>

                </>
                    </>
            ) : (
                <>
                    <header className="text-gray-600 body-font sticky top-0 bg-white z-10 ">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky top-0">
                            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                                <span className="ml-3 text-xl font-serif text-rose-900">Clínica de la Mujer</span>
                            </a>
                            <nav
                                className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  text-rose-900 flex flex-wrap items-center text-base justify-center">
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/">Inicio</Link>
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/about">Sobre Nosotros</Link>
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg " href="/services">Servicios</Link>
                                <Link className="mr-5 hover:text-pink-950  hover:bg-rose-300 px-4 py-2.5 flex
                    transition-all duration-200 rounded-lg" href="/contact">Contacto</Link>

                            </nav>
                                <button
                                     onClick={() => signIn()}
                                className="inline-flex items-center
                    bg-white border-0 py-1 px-3 focus:outline-none hover:bg-rose-700 rounded text-base mt-4 md:mt-0 text-rose-900 hover:text-white">Iniciar Sesión

                            </button>
                        </div>
                    </header>
                </>

            )}
        </div>
    );
}
