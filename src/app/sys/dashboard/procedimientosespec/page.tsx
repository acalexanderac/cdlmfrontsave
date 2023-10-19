import Image from "next/image";
import React from 'react'
import {TipoProd1, TipoProd2, services2, services8, services1, consultaexterna, clinicadelamujer, controlprenatal} from "@/styles/imports";
import Link from "next/link";

const Procedimientos = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">PROCEDIMIENTOS ESPECÍFICOS</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Accede a los Diversos Procedimientos que ofrece la Clínica.</p>
                    <Link href="/sys/dashboard">
                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                            Regresar a Menú Principal</button>
                    </Link>
                </div>

                <div className="flex flex-wrap -m-3">
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={clinicadelamujer}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Clínica de la Mujer</h2>
                                    <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Clínica de la Mujer</h3>
                                    <Link href="/sys/dashboard/procedimientosespec/clinicadelamujer">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Clínica de la Mujer</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={controlprenatal}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Control Prenatal</h2>
                                    <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Control Prenatal</h3>
                                    <Link href="/sys/dashboard/procedimientosespec/controlnatal">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Control Prenatal</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={consultaexterna}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Consulta Externa</h2>
                                <h3 className="text-gray-500 mb-3">Añadir, Modificar y Eliminar Registros de Consulta Externa</h3>
                                <Link href="/sys/dashboard/procedimientosespec/consultaexterna">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Consulta Externa</button>
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
