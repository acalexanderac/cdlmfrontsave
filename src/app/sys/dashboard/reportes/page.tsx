import Image from "next/image";
import React from 'react'
import {TipoProd1, TipoProd2, services2, services8, services1, colposcopia, papanicolaou, postoperacion, paciente, pacientesmenu, pacientesv2, pacientesv3, Logo, citas, citas1, crioterapias, colposcopias, postops, consultaexterna, controlprenatal, clinicadelamujer} from "@/styles/imports";
import Link from "next/link";

const Procedimientos = () => {
    return (
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-pink-900"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Reportes del Sistema</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Explora nuestra sección de Generación de Reportes, donde podrás acceder
                a informes detallados a los diferentes Módulos de nuestra Clínica. </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
                 <Image className="tracking-widest align-middle flex-auto "
                                   src={pacientesv3}
                                   alt="Pacientes"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pacientes</h2>
        <p className="text-base leading-relaxed mt-2">Reportería de Pacientes</p>
<Link href="/sys/dashboard/reportes/paciente">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                    Ir a Reportes de Reportes de Pacientes</button>
                            </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<Image className="tracking-widest align-middle flex-auto "
                                   src={Logo}
                                   alt="Pacientes"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
                 <Image className="tracking-widest align-middle flex-auto "
                                   src={citas}
                                   alt="Pacientes"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Citas</h2>
        <p className="text-base leading-relaxed mt-2">Reportería de Citas</p>
<Link href="/sys/dashboard/reportes/citas">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                    Ir a Reportes de Reportes de Citas</button>
                            </Link>
      </div>
    </div>
        </div>
        
         <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={crioterapias}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Crioterapia</h2>
                                    <h3 className="text-gray-500 mb-3">Accede a los Reportes de Crioterapia</h3>
                                    <Link href="/sys/dashboard/reportes/crioterapia">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Reportes de Crioterapia</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={colposcopias}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Colposcopia</h2>
                                    <h3 className="text-gray-500 mb-3">Accede a los Reportes de Colposcopia</h3>
                                    <Link href="/sys/dashboard/reportes/colposcopia">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Reportes de Colposcopia</button>
                                    </Link>
                                </div>
                        </div>
                    </div>

                                        <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={postops}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Pacientes Post Operación</h2>
                                <h3 className="text-gray-500 mb-3">Accede a los Reportes de Pacientes Post Operación</h3>
                                <Link href="/sys/dashboard/reportes/postoperacion">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Reportes de Pacientes Post Operación</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={papanicolaou}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Papanicolaous</h2>
                                <h3 className="text-gray-500 mb-3">Accede a los Reportes de Papanicolaous</h3>
                                <Link href="/sys/dashboard/reportes/papanicolaou">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Reportes de Papanicolaous</button>
                                </Link>
                            </div>
                        </div>
                    </div>

        </div>
        
                        <div className="flex flex-wrap -m-3">
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image className="tracking-widest align-middle flex-auto "
                                   src={clinicadelamujer}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Clínica de la Mujer</h2>
                                    <h3 className="text-gray-500 mb-3">Accede a los Reportes de Clínica de la Mujer</h3>
                                    <Link href="/sys/dashboard/reportes/clinicadelamujer">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Reportes de Clínica de la Mujer</button>
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
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Control Prenatal</h2>
                                    <h3 className="text-gray-500 mb-3">Accede a los Reportes de Control Prenatal</h3>
                                    <Link href="/sys/dashboard/reportes/controlnatal">
                                        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                            Ir a Reportes de Control Prenatal</button>
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
                                   style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Consulta Externa</h2>
                                <h3 className="text-gray-500 mb-3">Accede a los Reportes de Consulta Externa</h3>
                                <Link href="/sys/dashboard/reportes/consultaexterna">
                                    <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                        Ir a Reportes de Consulta Externa</button>
                                </Link>
                            </div>
                        </div>
                    </div>
     
                </div>
</section>
    );
};
export default  Procedimientos;
