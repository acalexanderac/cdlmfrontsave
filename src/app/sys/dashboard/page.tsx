"use client";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import {Logo, paciente, patients, proced1, proced2, proced3, TipoTratamiento} from "@/styles/imports";
import Link from "next/link";
const Dashboard = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <>
                <div className="place-items-center grid py-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Cargando...</h1>
                        <div className="h-1 w-20 bg-rose-500 rounded"></div>
                    </div>
                    <Image className=" align-middle flex-auto mx-auto"
                           src={Logo}
                           alt="Pacientes Clínica"
                           width={400}
                           height={400}
                           blurDataURL="data:..."
                           placeholder="blur"
                    />

                </div>
                </>
        )
    }

  

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">DASHBOARD</h1>
                        <div className="h-1 w-20 bg-rose-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Accede fácilmente a diferentes partes del sistema, como Pacientes, Procedimientos y Tipos de Procedimiento, incluyendo
                        Normales y Específicos.</p>

                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-rose-100 p-6 rounded-lg " >
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={paciente}
                                   alt="Pacientes"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <h3 className="tracking-widest text-rose-500 text-xs font-medium title-font">PACIENTES</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pacientes</h2>
                                <p className="leading-relaxed text-base">Formularios de Control de Pacientes</p>
                            <Link href="/sys/dashboard/pacientes">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                   Ir a Mantenimientos de Pacientes</button>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-rose-100 p-6 rounded-lg ">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={proced2}
                                   alt="Tratamientos"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <h3 className="tracking-widest text-rose-500 text-xs font-medium title-font">PROCEDIMIENTOS</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Procedimientos Generales</h2>
                                <p className="leading-relaxed text-base">Formularios y Control de Procedimientos a nivel General</p>
                            <Link href="/sys/dashboard/procedimientos">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                    Ir a Procedimientos Generales</button>
                            </Link>
                        </div>
                    </div>
                                      <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-rose-100 p-6 rounded-lg ">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={proced3}
                                   alt="Tratamientos"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                                <h3 className="tracking-widest text-rose-500 text-xs font-medium title-font pt-5 mt-8">PROCEDIMIENTOS</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Procedimientos Específicos</h2>
                                <p className="leading-relaxed text-base  pt-2">Formularios y Control de Procedimientos Específicos</p>
                            <Link href="/sys/dashboard/procedimientosespec">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                    Ir a Procedimientos Específicos</button>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-rose-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Dashboard;
