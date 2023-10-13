import Image from "next/image";
import React from 'react'
import {TipoProd1, TipoProd2, services2, services8, services1} from "@/styles/imports";
import Link from "next/link";

const Procedimientos = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">PROCEDIMIENTOS</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Accede a los Diversos Procedimientos que ofrece la Clínica.</p>
                    <Link href="/sys/dashboard">
                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                            Regresar a Menú Principal</button>
                    </Link>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={TipoProd1}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Crioterapia</h2>
                                    <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Crioterapia</h3>
                                    <Link href="/sys/dashboard/procedimientos/crioterapia">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Crioterapia</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={services1}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Colposcopia</h2>
                                    <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Colposcopia</h3>
                                    <Link href="/sys/dashboard/procedimientos/colposcopia">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Colposcopia</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={services2}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Papanicolaous</h2>
                                <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Papanicolaous</h3>
                                <Link href="/sys/dashboard/procedimientos/papanicolaou">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Papanicolaous</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={services8}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Pacientes Post Operación</h2>
                                <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Pacientes Post Operación</h3>
                                <Link href="/sys/dashboard/procedimientos/postoperacion">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Pacientes Post Operación</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default  Procedimientos;
