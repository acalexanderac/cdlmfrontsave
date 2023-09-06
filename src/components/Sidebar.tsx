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
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-rose-300 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"></svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Inicio</span>
                                            </a>
                        
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray uppercase py-5">Pacientes</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer">
                                                    
                                                    <span>Mantenimientos Pacientes</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-rose-900 px-4 py-2.5 block
                      transition-all duration-200 hover:bg-rose-300 group cursor-pointer" >
                            
                                                    <span>Añadir Paciente</span>
                                                </a>
                                              
                                            </div>
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">Contact</p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Forms</span>
                                                    <span className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white
                        rounded-full uppercase border border-transparent inline-flex">15</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer" >
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg className="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Agents</span>
                                                </a>
                                                <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Customers</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 pb-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-rose-300 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Settings</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg className="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Logout</span>
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
