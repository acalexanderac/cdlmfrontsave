import Image from "next/image";
import React from 'react'
import {TipoProd1, TipoProd2, services2, services8, services1, colposcopia, papanicolaou, postoperacion, paciente, pacientesmenu, pacientesv2, pacientesv3, Logo, citas, citas1, crioterapias} from "@/styles/imports";
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
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Reportes Independientes</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Explora nuestra sección de Generación de Reportes, donde podrás acceder
                a informes detallados de las Citas y los Pacientes de nuestra Clínica. </p>
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
                                    Ir a Reportes de Pacientes</button>
                            </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<Image className="tracking-widest align-middle flex-auto "
                                   src={Logo}
                                   alt="Pacientes"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '80%', maxHeight: '100%' }}
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
                                    Ir a Reportes de Citas</button>
                            </Link>
      </div>
    </div>
        </div>
        
           <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Reportes Procedimientos Generales</h1>
        <div className="h-1 w-20 bg-pink-900 rounded"></div>
      </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Explora nuestra sección de Generación de Reportes, donde podrás acceder
                a informes detallados de diversos formularios clínicos utilizados en nuestra Clínica.  
            </p>
           
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
         <Image className="tracking-widest align-middle flex-auto "
                                   src={crioterapias}
                                   alt="Tratamientos Clínica"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
          <h3 className="tracking-widest text-rose-800 text-xs font-medium title-font">CRIOTERAPIA</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Crioterapias</h2>
                <p className="leading-relaxed text-base">Reportes de Crioterapias</p>
                 <Link href="/sys/dashboard/reportes/crioterapia">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
                                    Ir a Reportes de Crioterapias</button>
                            </Link>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 className="tracking-widest text-rose-800 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
          <h3 className="tracking-widest text-rose-800 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
          <h3 className="tracking-widest text-rose-800 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};
export default  Procedimientos;
