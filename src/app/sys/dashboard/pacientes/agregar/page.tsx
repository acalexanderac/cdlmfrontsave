"use client"
import React, {ChangeEvent, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import {useSession} from "next-auth/react";

//import { Logo} from "@/app/services/imports";


type FormData = {
    nombrePaciente: string;
    docIdentificacion: string;
    edadPaciente: number;
    estadoCivil: string;
    noIggs: string;
    telefono: string; // Cambiado a string
    religion: string;
    fechaNacimiento: string;
};

function PacientesFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const [newPaciente, setNewPaciente] = useState<FormData>({
        nombrePaciente: "",
        docIdentificacion: "",
        edadPaciente: 0,
        estadoCivil: "",
        noIggs: "",
        telefono: "", // Cambiado a string
        religion: "",
        fechaNacimiento: ""
    });


    const getPaciente = async () => {
  // Check if params['id'] is defined
  if (params['id']) {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/patients/${params['id']}`, {
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
      setNewPaciente({
        nombrePaciente: dataUpdate.nombrePaciente,
        docIdentificacion: dataUpdate.docIdentificacion,
        edadPaciente: dataUpdate.edadPaciente,
        estadoCivil: dataUpdate.estadoCivil,
        noIggs: dataUpdate.noIggs,
        telefono: dataUpdate.telefono, // Cambiado a string
        religion: dataUpdate.religion,
        fechaNacimiento: dataUpdate.fechaNacimiento,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};

    useEffect(() => {
        if (session?.user?.token) {
            getPaciente();
        }
    }, [session]);


    const { register,handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleDelete = async () => {

        if (window.confirm('Are you sure you want to delete?')) {
           await fetch(`http://localhost:3001/api/v1/patients/${params['id']}`, {
                method: 'DELETE',
               headers: {
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${session?.user?.token}`,
               },
            })
            router.push('/sys/dashboard/pacientes')
            router.refresh();
        }
    }

const updateTask = async () => {
  try {

    const telefonoNumber = parseInt(newPaciente.telefono, 10);
      console.log('Datos que se envían al actualizar paciente:', { ...newPaciente, telefono: telefonoNumber });

    await fetch(`http://localhost:3001/api/v1/patients/${params['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify({ ...newPaciente, telefono: telefonoNumber }), // Include the parsed telefono

    });
    router.push("/sys/dashboard/pacientes");
    router.refresh();
  } catch (error) {
    console.error(error);
      toast.error("This didn't work.")
      console.error(error);
      toast.error("Hubo un error al actualizar el paciente ");

  }
};


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPaciente((prevState) => ({
      ...prevState,
      [name]: value.toString(), // Convert the value to a string
    }));
  };


    const onSubmit = async (data: FormData) => {
        if (!params.id) {
            try {
                // Convierte el valor del teléfono a número aquí
                const telefonoNumber = parseInt(data.telefono, 10);

 await axios.post(
        'http://localhost:3001/api/v1/patients',
        { ...data, telefono: telefonoNumber },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.token}`,
          },
        }
      );
              
                console.log('Formulario enviado con éxito');
                toast.success('Paciente Creado',
                    { duration: 3000, });
                router.push('/sys/dashboard/pacientes');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                toast.error("This didn't work.")


            }

        } else {
               const telefonoNumber = parseInt(data.telefono, 10);
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
                      !params.id ? "Añadir Paciente": "Editar Pacientes"
                  }
              </span>
            </a>

            {params.id ? (
                <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg" onClick={handleDelete}>
                    Eliminar Paciente ID. {params.id}
                </button>
            ) : (
                <button className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed" disabled>
                    Añadiendo Paciente
                </button>
            )}
            <div>


                <form onSubmit={handleSubmit(onSubmit)}>


                    <div>
                        <div className='px-5 py-5'>
                            <label htmlFor="nombrePaciente" className="block text-ls font-medium leading-6 text-gray-900">
                                Nombre del Paciente
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">

                                <input
                                    type="text"

                                    id="nombrePaciente"
                                    className="block rounded-md border-0 py-1.5 pl-7
                                    pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="John Doe"
                                    {...register("nombrePaciente", { required: false})}
                                    onChange={handleChange}
                                    value={newPaciente.nombrePaciente}
                                />
                                {errors.nombrePaciente && <span className="flex items-center font-medium tracking-wide text-red-500 text-ls mt-1 ml-1">
			Obligatorio !
		</span>}
                            </div>

                        </div>

                        <div className='px-5 '>
                            <label htmlFor="docIdentificacion" className="block text-ls font-medium text-gray-900">
                                Documento de Identificación DPI
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">

                                <input
                                    type="text"

                                    id="docIdentificacion"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20
                                    text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-1/2"
                                    placeholder="DPI Paciente"

                                    {...register("docIdentificacion", { required: false })}
                                    onChange={handleChange}
                                    value={newPaciente.docIdentificacion}
                                />

                            </div>



                        </div>


                        <div className='px-5 pt-5 flex flex-wrap'>
                            <div className="w-full md:w-1/2 pr-4">
                                <label htmlFor="estadoCivil" className="block text-ls font-medium text-gray-900">
                                    Estado Civil
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="estadoCivil"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-950 sm:text-sm sm:leading-6"
                                        placeholder="Estado Civil Paciente"
                                        {...register("estadoCivil", { required: false })}
                                        onChange={handleChange}
                                        value={newPaciente.estadoCivil}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="noIggs" className="block text-ls font-medium text-gray-900">
                                    Número de IGSS
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="noIggs"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Número de IGSS"
                                        {...register("noIggs", { required: false })}
                                        onChange={handleChange}
                                        value={newPaciente.noIggs}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='px-5 pt-5 flex flex-wrap'>
                        <div className="w-full md:w-1/2 pr-4">
                            <div className=''>
                                <label htmlFor="telefono" className="block text-ls font-medium leading-6 text-gray-900">
                                    Teléfono de Contacto
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type='number'
                                        id='telefono'
                                        className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        placeholder='Teléfono de Contacto'
                                        {...register('telefono', { required: false })}
                                        onChange={handleChange}
                                        value={newPaciente.telefono}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pl-4">
                            <div className=''>
                                <label htmlFor="religion" className="block text-ls font-medium leading-6 text-gray-900">
                                    Religión
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="religion"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Religión"
                                        {...register("religion", { required: false })}
                                        onChange={handleChange}
                                        value={newPaciente.religion}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 pt-5'>
                        <label htmlFor="fechaNacimiento" className="block text-ls font-medium leading-6 text-gray-900">
                            Fecha de Nacimiento
                        </label>
                        <label htmlFor="fechaNacimiento" className="block text-ls font-medium leading-6 text-rose-500">
                            Año-Mes-Día
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">

                            <input
                                type="text"

                                id="fechaNacimiento"
                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Fecha de Nacimiento"
                                {...register("fechaNacimiento", { required: false })}
                                onChange={handleChange}
                                value={newPaciente.fechaNacimiento}

                            />

                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className='pl-5 py-5 flex'>
                        <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500
                        rounded text-lg" type='submit'>
                            {!params.id ? "Guardar Paciente" : "Modificar Paciente"}
                            
                        </button>
                        
                    </div>
                    </div>


                </form>

            </div>
        </div>


    )
}

export default PacientesFormPage