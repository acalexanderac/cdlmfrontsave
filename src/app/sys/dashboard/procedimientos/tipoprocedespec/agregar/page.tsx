"use client"
import React, {ChangeEvent, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import {useSession} from "next-auth/react";
//import { Logo} from "@/app/services/imports";


type FormData = {
    name: string;

};

function TipoProdFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const [newTipoProcg, setNewTipoProcg] = useState<FormData>({
        name: "",

    });


    const getTipoProdg = async () => {
  // Check if params['id'] is defined
  if (params['id']) {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/tipotratamientoespec/${params['id']}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });

      if (!res.ok) {
          toast.error("This didn't work.")
          throw new Error(`Failed to fetch data, status: ${res.status}`);

      }

      const dataUpdate = await res.json();
      setNewTipoProcg({
        name: dataUpdate.name,

      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};

    useEffect(() => {
        if (session?.user?.token) {
            getTipoProdg();
        }
    }, [session]);


    const { register,handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleDelete = async () => {

        if (window.confirm('Are you sure you want to delete?')) {
           await fetch(`http://localhost:3001/api/v1/tipotratamientoespec/${params['id']}`, {
                method: 'DELETE',
               headers: {
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${session?.user?.token}`,
               },
            })
            router.push('/sys/dashboard/procedimientos/tipoprocedespec');
            router.refresh();
        }
    }

const updateTask = async () => {
  try {

    await fetch(`http://localhost:3001/api/v1/tipotratamientoespec/${params['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify({ ...newTipoProcg}), // Include the parsed telefono
    });
    router.push("/sys/dashboard/procedimientos/tipoprocedespec");
    router.refresh();
  } catch (error) {
    console.error(error);
      toast.error("This didn't work.")

  }
};


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTipoProcg((prevState) => ({
      ...prevState,
      [name]: value.toString(), // Convert the value to a string
    }));
  };


    const onSubmit = async (data: FormData) => {
        if (!params.id) {
            try {
                // Convierte el valor del teléfono a número aquí


 await axios.post(
        'http://localhost:3001/api/v1/tipotratamientoespec',
        { ...data},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.token}`,
          },
        }
      );
              


                router.push('/sys/dashboard/procedimientos/tipoprocedespec');
            } catch (error) {

                toast.error("This didn't work.")


            }

        } else {

            await updateTask();

        }


    };
    return (
        <div className="flex flex-col justify-center items-center ">
            <Toaster/>

            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-rose-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                <span className="ml-3 text-2xl font-serif">
                  {
                      !params.id ? "Añadir Tipo Procedimiento Específico": "Editar Tipo Procedimiento Específico"
                  }
              </span>
            </a>

            {params.id ? (
                <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg" onClick={handleDelete}>
                    Eliminar Tipo de Procedimiento Específico
                </button>
            ) : (
                <button className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed" disabled>
                    Añadiendo Tipo de Procedimiento Específico
                </button>
            )}
            <div>


                <form onSubmit={handleSubmit(onSubmit)}>


                        <div className='px-5 py-5'>
                            <label htmlFor="name" className="block text-ls font-medium leading-6 text-gray-900">
                                Nombre del Tipo Procedimiento Específico
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">

                                <input
                                    type="text"

                                    id="name"
                                    className="block rounded-md border-0 py-1.5 pl-7
                                    pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="Clínica de la Mujer"
                                    {...register("name", { required: false})}
                                    onChange={handleChange}
                                    value={newTipoProcg.name}
                                />
                                {errors.name && <span className="flex items-center font-medium tracking-wide text-red-500 text-ls mt-1 ml-1">
			Obligatorio !
		</span>}
                            </div>

                        </div>



                    <div className="flex flex-col items-center">
                        <div className='pl-5 py-5 flex'>
                        <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500
                        rounded text-lg" type='submit'>
                            {!params.id ? "Guardar Tipo Procedimiento Específico" : "Modificar Tipo Procedimiento Específico"}
                            
                        </button>
                        
                    </div>
                    </div>


                </form>

            </div>
        </div>


    )
}

export default TipoProdFormPage