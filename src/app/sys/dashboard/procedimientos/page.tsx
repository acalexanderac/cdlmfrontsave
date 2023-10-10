import Image from "next/image";
import React from 'react'
import {TipoProd1, TipoProd2, services2} from "@/styles/imports";
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
                                   src={TipoProd2}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Procedimientos Generales</h2>
                                    <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Procedimientos Generales</h3>
                                    <Link href="/sys/dashboard/procedimientos/procedespecificos">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Procedimientos Generales</button>
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
                                <h2 className="title-font font-medium text-lg text-gray-900">Tipo Procedimientos Específicos</h2>
                                <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Tipos de Procedimientos Específicos</h3>
                                <Link href="/sys/dashboard/procedimientos/tipoprocedespec">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Tipo Procedimientos Específicos</button>
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
                                <h2 className="title-font font-medium text-lg text-gray-900">Tipo Procedimientos Específicos</h2>
                                <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Tipos de Procedimientos Específicos</h3>
                                <Link href="/sys/dashboard/procedimientos/tipoprocedespec">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Tipo Procedimientos Específicos</button>
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
