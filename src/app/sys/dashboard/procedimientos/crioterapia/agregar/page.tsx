"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import PatientListSearch from '../../../pacientes/pacientes.components/search';
import { Logo, crioterapiaimg, proced3 } from '@/styles/imports';
import Image from 'next/image';
interface FormData {
    fechaCrioterapia: string;
    cuadrantesuperiorizq: boolean;
    cuadrantesuperiorder: boolean;
    cuadranteinferiorizq: boolean;
    cuadranteinferiorder: boolean;
    notascuadrantesuperiorizq: string;
    notascuadrantesuperiorder: string;
    notascuadranteinferiorizq: string;
    notascuadranteinferiorder: string;
    numeroCrioterapia: number;
    observaciones: string;
    paciente: string;
    notasCrioterapia: string;
}

function CrioterapiaFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
        fechaCrioterapia: '',
        cuadranteinferiorder: false,
        cuadranteinferiorizq: false,
        cuadrantesuperiorder: false,
        cuadrantesuperiorizq: false,
        notascuadranteinferiorder: '',
        notascuadranteinferiorizq: '',
        notascuadrantesuperiorder: '',
        notascuadrantesuperiorizq: '',
        numeroCrioterapia: 0,
        observaciones: '',
        paciente: '',
        notasCrioterapia: '',
    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`http://localhost:3001/api/v1/crioterapias/${params.id}`, {
                    // headers...
                });

                if (!res.data) {
                    toast.error("This didn't work.");
                    throw new Error('No data found');
                }

                const dataUpdate = res.data;

                // Debugging: Log the dataUpdate object
                console.log('Data from API:', dataUpdate);

                // Extract the relevant properties from the objects
                const pacienteName = dataUpdate.paciente?.docIdentificacion || '';


                // Debugging: Log the extracted values


                // Update the local state with the extracted data
                setNewProcedimiento((prevState) => ({
                    ...prevState || {},
                    fechaCrioterapia: String(dataUpdate.fechaTratamiento || ''),
                    cuadranteinferiorder: Boolean(dataUpdate.cuadranteinferiorder || false || null),
                    cuadranteinferiorizq: Boolean(dataUpdate.cuadranteinferiorizq || false || null),
                    cuadrantesuperiorder: Boolean(dataUpdate.cuadrantesuperiorder || false || null) ,
                    cuadrantesuperiorizq: Boolean(dataUpdate.cuadrantesuperiorizq || false || null),
                    notascuadranteinferiorder: String(dataUpdate.notascuadranteinferiorder || ''),
                    notascuadranteinferiorizq: String(dataUpdate.notascuadranteinferiorizq || ''),
                    notascuadrantesuperiorder: String(dataUpdate.notascuadrantesuperiorder || ''),
                    notascuadrantesuperiorizq: String(dataUpdate.notascuadrantesuperiorizq || ''),
                   numeroCrioterapia: Number(dataUpdate.numeroCrioterapia || 0 || null),
                    observaciones: String(dataUpdate.observaciones || ''),
                    paciente: pacienteName || '', // Ensure it's a string
                    notasCrioterapia: String(dataUpdate.notasCrioterapia || ''),
                }));

                // Update form values using setValue
                Object.keys(dataUpdate).forEach((key) => {
                    setValue(key as keyof FormData, dataUpdate[key as keyof FormData]);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    useEffect(() => {
        getTreatment(); // Call the getTreatment function here
    }, [params.id, session]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`http://localhost:3001/api/v1/crioterapias/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/procedimientos/crioterapia');
                router.refresh(); // Use reload instead of refresh
            } catch (error) {
                console.error(error);
                toast.error("This didn't work.");
                console.error(error);
                toast.error('Hubo un error al eliminar el procedimiento');
            }
        }
    };

    const updateTask = async (data: FormData) => {
        try {
            router.refresh();
            console.log('Datos que se envían al actualizar paciente:', { ...data });

            // Convert patient and treatmentype objects to strings
            const updateData = {
                fechaCrioterapia: data.fechaCrioterapia,
                cuadranteinferiorder: data.cuadranteinferiorder,
                cuadranteinferiorizq: data.cuadranteinferiorizq,
                cuadrantesuperiorder: data.cuadrantesuperiorder,
                cuadrantesuperiorizq: data.cuadrantesuperiorizq,
                notascuadranteinferiorder: data.notascuadranteinferiorder,
                notascuadranteinferiorizq: data.notascuadranteinferiorizq,
                notascuadrantesuperiorder: data.notascuadrantesuperiorder,
                notascuadrantesuperiorizq: data.notascuadrantesuperiorizq,
                numeroCrioterapia: data.numeroCrioterapia,
                observaciones: data.observaciones,
                paciente: data.paciente.toString(), // Convert patient object to string
                notasCrioterapia: data.notasCrioterapia,
            };

            await axios.patch(`http://localhost:3001/api/v1/crioterapias/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/procedimientos/crioterapia');
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("This didn't work.");
            console.error(error);
            toast.error('Hubo un error al actualizar el procedimiento');
        }
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProcedimiento((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



    const onSubmit = async (data: FormData) => {
        console.log('Data to be sent:', data); // Log the data

        if (!params.id) {
            try {
                const response = await axios.post(
                    'http://localhost:3001/api/v1/crioterapias',
                    { ...data }, // Use "paciente" for the field name
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${session?.user?.token}`,
                        },
                    }
                );

                // Update local state with the newly created treatment data
                const newTreatment = response.data;
                setNewProcedimiento(newTreatment);

                console.log('Formulario enviado con éxito');
                toast.success('Treatments creado', { duration: 3000 });
                router.push('/sys/dashboard/procedimientos/crioterapia');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                toast.error("This didn't work.");
            }
        } else {
            await updateTask(data);
        }
    };


    return (
       <div className="flex justify-center items-center w-full ">
  <div className="flex flex-col justify-center items-center">
                <Toaster />

                <a className="flex title-font font-medium justify-center items-center text-gray-900 pb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-6 h-6 stroke-rose-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>

                    <span className=" text-2xl font-serif justify-center items-center">
          {!params.id ? 'Añadir Crioterapia' : 'Editar Crioterapia'}
        </span>
                </a>
<div className='justify-center items-center'>
                {params.id ? (
                    <button
                        className="text-white bg-rose-900 border-0 justify-center items-center py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
                        onClick={handleDelete}
                    >
                        Eliminar Crioterapia ID. {params.id}
                    </button>
                ) : (
                    <button
                        className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed "
                        disabled
                    >
                        Añadiendo Crioterapia
                    </button>
                    )}
                    </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-gray-900">
      Fecha de Crioterapia
    </label>
    <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-rose-500">
      Año-Mes-Día
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        id="fechaTratamiento"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Tratamiento"
        {...register('fechaCrioterapia', { required: false })}
      />
    </div>
  </div>

  <div className="flex-1">
    <label htmlFor="numeroCrioterapia" className="block text-ls font-medium text-gray-900">
      Número de Crioterapia
                                    </label>
                                    <label htmlFor="noCriot" className="block text-ls font-medium leading-6 text-rose-500">
      No. 1,2,3 o 4
    </label>
    <div className="relative mt-2 rounded-md shadow-sm ">
      <input
  type="number"
  id="numeroCrioterapia"
  className="block rounded-md border-0 py-1.5 pl-7 pr-20
    text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
  placeholder="1,2,3,4"
  {...register('numeroCrioterapia')} // Remove { required: false }
/>

    </div>
  </div>
</div>

                            <div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
  
                                    <label htmlFor="observaciones" className="block text-ls font-medium text-gray-900">
                                        Observaciones Generales
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="observaciones"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Observaciones Generales"
                                            {...register('observaciones', { required: false })}
                                        />
                                    </div>
                            
  </div>

 <div className="flex-1">
  <div>
    <div className="flex-1">
      
    <Image className=" align-middle flex-auto mx-auto"
                           src={crioterapiaimg}
                           alt="Pacientes Clínica"
                           width={120}
                           height={120}
                           blurDataURL="data:..."
                           placeholder="blur"
                    />
                                            
    </div>
  </div>
</div>


</div>
                            
         
                            
 <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="anestesia" className="block text-ls font-medium text-gray-900">
                                        Cuadrante Superior Izquierdo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cuadrantesuperiorizq"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cuadrantesuperiorizq', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pl-4">
                                    <label htmlFor="notascuadrantesuperiorizq" className="block text-ls font-medium text-gray-900">
                                        Notas Cuadrante Superior Izquierdo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="notascuadrantesuperiorizq"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Cuadrante Superior Izq."
                                            {...register('notascuadrantesuperiorizq', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>


                         <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="cuadrantesuperiorder" className="block text-ls font-medium text-gray-900">
                                        Cuadrante Superior Derecho
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cuadrantesuperiorder"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cuadrantesuperiorder', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pl-4">
                                    <label htmlFor="notascuadrantesuperiorizq" className="block text-ls font-medium text-gray-900">
                                        Notas Cuadrante Superior Derecho
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="notascuadrantesuperiorizq"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Cuadrante Superior Izq."
                                            {...register('notascuadrantesuperiorder', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="cuadranteinferiorder" className="block text-ls font-medium text-gray-900">
                                        Cuadrante Inferior Derecho
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cuadranteinferiorder"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cuadranteinferiorder', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pl-4">
                                    <label htmlFor="notascuadranteinferiorder" className="block text-ls font-medium text-gray-900">
                                        Notas Cuadrante Inferior Derecho
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="notascuadranteinferiorder"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Cuadrante Inferior Der."
                                            {...register('notascuadranteinferiorder', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="anestesia" className="block text-ls font-medium text-gray-900">
                                        Cuadrante Inferior Izquierdo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cuadranteinferiorizq"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cuadranteinferiorizq', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 pl-4">
                                    <label htmlFor="notascuadranteinferiorder" className="block text-ls font-medium text-gray-900">
                                        Notas Cuadrante Inferior Izquierdo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="notascuadranteinferiorder"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Cuadrante Inferior Izq."
                                            {...register('notascuadranteinferiorizq', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>

                                                     


                        </div>

                        <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                    <div>
                                        <label htmlFor="paciente" className="block text-ls font-medium leading-6 text-gray-900">
                                            Pacientes
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="paciente" // Use 'patient' here if it's the field name in your form
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="DPI Pacientes"
                                                {...register('paciente', { required: false })}
                                                value={newProcedimiento.paciente.toString()}
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="notasCrioterapia" className="block text-ls font-medium leading-6 text-gray-900">
                                    DPI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="notasCrioterapia"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Notas Crioterapia"
                                        {...register('notasCrioterapia', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="pl-5 py-5 flex">
                                <button
                                    className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500
                        rounded text-lg"
                                    type="submit"
                                >
                                    {!params.id ? 'Guardar Crioterapia' : 'Modificar Crioterapia'}
                                </button>
                              
                            </div>
                        </div>
                        
                    </form>
                       <div className="flex justify-center">
            <div className="text-neutral-400 items-center">Recuerda hacer Click sobre el campo de Paciente y DPI para ser válidos</div>
        </div>
                </div>
            </div>
       
            <div className="">
                <PatientListSearch/>
            </div>
        </div>

    );
}

export default CrioterapiaFormPage;
