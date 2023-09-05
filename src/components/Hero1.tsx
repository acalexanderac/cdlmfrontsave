import Image from 'next/image'
import logo from '../../public/logo.jpg'
import hero from '../../public/heroimg.jpeg'
export default function Hero() {
    return (


        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pb-6 items-center justify-center flex-col">


                <div className="flex flex-cols-2 flex-rows-1  place-self-auto items-center pb-12 pt-12">
                    <div >
                        <Image
                            src={logo}
                            alt="LogoCDLM"
                             width={500}
                             height={500}
                             blurDataURL="data:..."
                             placeholder="blur"
                        />
                    </div>
                    <div className="pl-24  ">
                        <div className="bg-rose-300 ">
                        <Image className="rounded-lg  opacity-75 overflow-hidden "

                            src={hero}
                            alt="Hero"

                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        </div>
                    </div>
                </div>


                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-black">Comprometidos
                            por tu Salud y la de Tus Seres Queridos</h1>

                        <p className="mb-2 leading-relaxed text-pink-900">Bienvenido/a a nuestra clínica ginecológica, un espacio
                            dedicado exclusivamente al cuidado y bienestar de la salud femenina, donde tú y tu familia son nuestra prioridad.</p>



                        <p className="mb-2 leading-relaxed text-gray-700">En nuestra clínica, comprendemos la importancia de la salud ginecológica en cada etapa de la vida
                            de la mujer, y por eso, te ofrecemos una gama completa de servicios especializados diseñados para brindarte atención integral y personalizada. </p>
                    </div>

            </div>
        </section>
    )
}
