import Image from 'next/image';
import aboutImage from 'public/about2.png'
import about1 from 'public/about-resized.png'
import about2 from 'public/about2-resized.png'
import Link from "next/link"
export default function About() {
    return (
        <section className="text-gray-600 body-font">

            <div className="container px-5 pt-24 pb-6 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-1/2 overflow-hidden bg-rose-300 ">
                        <div className="opacity-75">
                        <Image
                            className="bg-opacity-0"
                            src={aboutImage}
                            alt="Picture of the author"

                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className=" text-center content-center w-full mb-20 ">

                            <h2 className="text-xs text-rose-900 tracking-widest font-medium title-font mb-1">Conócenos</h2>



                           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-4 ">Sobre Nosotros

                            </h1>



                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-5">Cónoce un poco más sobre nosotros, estamos para servirte.

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="" strokeWidth={1.5} className="w-6 h-6 stroke-rose-700 justify-center items-center mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>

                        <div
                            className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                            <p className="leading-relaxed text-lg mb-4">Brindamos servicios de calidad, especialmente
                            en el área ginecológica y maternal con sentido humano y personal altamente calificado.
                                Somos una clínica que provee servicios en el campo de la Ginecología y Obstetricia, la eficiencia y
                                profesionalismo de su personal, hacen de la Clínica de la Mujer el mejor lugar para el cuidado de la mujer y su bebé.
                            </p>
                            <Link className="text-rose-900 inline-flex items-center" href="/contact">Contáctanos
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-5">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg overflow-hidden bg-rose-300 ">
                                <div className="opacity-75">
                                    <Image
                                        className="bg-opacity-0"
                                        src={about1}
                                        alt="Picture of the author"
width="1500"
                                        height="500"
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Misión</h2>
                            <p className="leading-relaxed text-base">Brindar servicios de salud de mediana y alta complejidad, especialmente en el
                                área materno-perinatal, y ginecológica con estándares altos de calidad, sentido humano y ética profesional
                                con personal capacitado orientado a la responsabilidad social contribuyendo al bienestar y cuidado de las familias de Quetzaltepeque, Chiquimula.</p>

                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <div className="rounded-lg  overflow-hidden bg-rose-300 ">
                                    <div className="opacity-75">
                                        <Image
                                            className="bg-opacity-0"
                                            src={about2}
                                            alt="Picture of the author"
                                            width="1500"
                                            height="500"

                                            // blurDataURL="data:..." automatically provided
                                            // placeholder="blur" // Optional blur-up while loading
                                        />
                                    </div>
                                </div>
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900  mb-3">Visión</h2>
                            <p className="leading-relaxed text-base">En el 2023 seguir siendo el referente número uno para la mujer y la familia,
                                brindando servicios integrales de salud, fundamentados en la seguridad de la paciente, con trato humanizado, capacitación permanente
                                de nuestros colaboradores y la mejora continua de los procesos asistenciales y administrativos de nuestra clínica de atención para las mujeres.</p>

                        </div>
                    </div>
                </div>
            </div>

<div/>
        </section>
    )
}
