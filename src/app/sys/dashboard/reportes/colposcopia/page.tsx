import Image from "next/image";
import React from 'react'
import Link from "next/link";
import { colposcopias } from "@/styles/imports";

const Procedimientos = () => {
    return (
     <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">COLPOSCOPIA</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Reportes de Colposcopia</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-rose-800 border-b-2 border-rose-800 py-2 text-lg px-1">Tipos de Reportes</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Colposcopia</a>
     
        </div>
              <p className="leading-relaxed mb-4">
                En nuestra sección de Generación de Reportes de Colposcopia, te ofrecemos un acceso
                completo a la información esencial el Examen de Colposcopia. Filtrados por Mes, Semana o Todo.
        </p>
<div className="flex justify-between border-t border-gray-200 py-2">
  <span className="text-gray-500 pr-5">Todos los Colposcopia</span>
  <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/colposcopias/report`}>
    <button className="text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
      Reporte Todos los Registros de Colposcopia.
    </button>
  </a>
</div>
<div className="flex justify-between border-t border-gray-200 py-2">
  <span className="text-gray-500 pr-5">Colposcopia Mes Actual</span>
  <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/colposcopias/report/mesactual`}>
    <button className="text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
      Reporte Mes Actual
    </button>
  </a>
</div>
<div className="flex justify-between border-t border-gray-200 py-2">
  <span className="text-gray-500 pr-5">Colposcopia de esta Semana</span>
  <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/colposcopias/report/semanaactual`}>
    <button className="text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
      Reporte Semana Actual
    </button>
  </a>
</div>

      </div>
      <Image className="tracking-widest align-middle flex-auto "
                                   src={colposcopias}
                                   alt="Colposcopia"

                                   blurDataURL="data:..."
                                   placeholder="blur"
                                   style={{ maxWidth: '50%', maxHeight: '50%' }}
                            />
    </div>
  </div>
</section>
    );
};
export default  Procedimientos;