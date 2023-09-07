"use client";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import {patients, Tratamientos} from "@/styles/imports";
import Link from "next/link";
const Dashboard = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <>
           <div role="status">
    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
                </>
        )
    }

  

    return (
        <div className="place-items-center grid py-5">
            <h1 className="text-3xl font-medium title-font text-rose-900 py-5 text-center">Dashboard</h1>
        <div>
         <section className="text-gray-600 body-font">
  <div className="container px-5 pt-4 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image className="tracking-widest align-middle flex-auto mx-auto"
               src={patients}
               alt="Pacientes Clínica"

               blurDataURL="data:..."
               placeholder="blur"
                 style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Pacientes</h2>
        <p className="leading-relaxed text-base">Formularios de Pacientes</p>
        <Link href="/sys/dashboard/pacientes">
                                <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 hover:text-black rounded">Ir a Pacientes</button>
      </Link>
                            </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
            <Image className="tracking-widest align-middle flex-auto mx-auto"
                   src={Tratamientos}
                   alt="Pacientes Clínica"

                   blurDataURL="data:..."
                   placeholder="blur"
                   style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Tratamientos</h2>
        <p className="leading-relaxed text-base">Tratamientos y Tipo Tratamiento</p>
          <Link href="/sys/dashboard/tratamientos">
        <button className="flex mx-auto mt-6 text-white bg-rose-900 border-0 py-2 px-5 focus:outline-none hover:bg-rose-300 rounded">
            Ir a Tratamientos</button>
              </Link>
      </div>
    </div>
  </div>
</section> 
            </div>
            </div>
    );
};
export default Dashboard;
