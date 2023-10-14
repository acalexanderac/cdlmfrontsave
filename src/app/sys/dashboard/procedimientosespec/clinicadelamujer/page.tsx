"use client"
import Link from "next/link";
import React from 'react'
import Cdlmlists from "./clinica.components/listtry";

function PacientesCrud() {
  return (
    <> 
      
      <div className="pl-5 pt-5 pb-5 grid place-items-center ">
     
      
      <div className="pl-5">
         <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-rose-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                        <span className="ml-3 text-2xl font-serif">Clínica de la Mujer</span>
                    </a>
                   
      </div>
      <div className="align-center pl-5 pb-10">
      <Link href="/sys/dashboard/procedimientosespec/clinicadelamujer/agregar">
        <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">Agregar Registro</button>
        </Link>
        
           <Link href="/sys/dashboard/procedimientosespec " className="pl-5">
        <button className="text-white bg-rose-600 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">Regresar Menú Principal</button>
          </Link>
        </div>
             
      <div className="pb-10">
    <Cdlmlists/>
      </div>
        </div>
     
     
      
          </>
  )
}

export default PacientesCrud