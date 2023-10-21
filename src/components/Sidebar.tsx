"use client"
import {  useSession } from "next-auth/react";

export default function Sidebar() {
        const { data: session } = useSession();

    return (
        <div>
            {session?.user ? (
                <>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 ">
            </div>
            <div className="bg-white"></div>
            <div className="bg-white">
                <div className="flex-col flex w-full">
                    <div className="w-full border-b-2 border-gray-200">
                    </div>
                    <div className="flex bg-white  overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray uppercase ">Inicio</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">

                                                <a href="/sys/dashboard" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-5 block
                      transition-all duration-200 hover:bg-rose-100 group cursor-pointer" >

                                                    <span> Dashboard </span>
                                                </a>

                                            </div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray uppercase ">Pacientes</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">

                                                <a href="/sys/dashboard/pacientes" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer" >
                            
                                                    <span> Mantenimientos Pacientes </span>
                                                </a>
                                              
                                            </div>
                                        </div>
                                        <div>


                                                    <a className="px-4 font-semibold text-xs  text-gray uppercase ">
                                                        Procedimientos</a>
                                                <div className="mt-4 bg-top bg-cover space-y-1">

                                                    <a href="/sys/dashboard/procedimientos" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer" >

                                                        <span> Procedimientos Generales</span>
                                                    </a>

                                                    <a href="/sys/dashboard/procedimientosespec" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer" >

                                                        <span> Procedimientos Específicos </span>
                                                        </a>
                                                 


                                                    </div>
                                                    <a className="px-4 font-semibold text-xs  text-gray uppercase ">
                                                        Citas</a>       
                                                  <a href="/sys/dashboard/citas" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer" >

                                                        <span> Agendado de Citas </span>
                                                    </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    </>
            ) : (
                <>
                </>
            )}
        </div >

    );
};
