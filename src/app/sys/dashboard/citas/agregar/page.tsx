"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import PatientListSearch from '../../pacientes/pacientes.components/search';
import { Logo, crioterapiaimg, proced3 } from '@/styles/imports';
import Image from 'next/image';
interface FormData {
    fechaAgendado: string;
    motivo: string;
    observaciones: string;
    paciente: string;
    dpi: string;
    horaAgendado: string;
}

function CitasFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
        fechaAgendado: '',
        motivo: '',
        observaciones: '',
        paciente: '',
        dpi: '',
        horaAgendado: '',
    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/citas/${params.id}`, {
                    // headers...
                });

                if (!res.data) {
                    toast.error("Error.");
                    throw new Error('Sin datos');
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
                    fechaAgendado: String(dataUpdate.fechaTratamiento || ''),
                    motivo: String(dataUpdate.motivo || ''),
                    observaciones: String(dataUpdate.observaciones || ''),
                    paciente: pacienteName || '', // Ensure it's a string
                    dpi: String(dataUpdate.dpi || ''),
                    horaAgendado: String(dataUpdate.horaAgendado || ''),
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
                await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/citas/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/citas');
                router.refresh(); // Use reload instead of refresh
            } catch (error) {
                console.error(error);
                toast.error("Oops.");
                console.error(error);
                toast.error('Hubo un error al eliminar esta Cita');
            }
        }
    };

    const updateTask = async (data: FormData) => {
        try {
            router.refresh();
           

            // Convert patient and treatmentype objects to strings
            const updateData = {
                fechaAgendado: data.fechaAgendado,
                motivo: data.motivo,
                observaciones: data.observaciones,
                paciente: data.paciente.toString(), // Convert patient object to string
                dpi: data.dpi,
                horaAgendado: data.horaAgendado,
            };

            await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/citas/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/citas');
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Oops.");
            console.error(error);
            toast.error('Revisa si no hay citas en ese Horario o Verifica Paciente/DPI.');
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
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/citas`,
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
                router.push('/sys/dashboard/citas');
            } catch (error) {
                console.error('Revisa si no hay citas en ese Horario', error);
                toast.error("Recuerda Validar DPI & Paciente.");
            }
        } else {
            await updateTask(data);
        }
    };


    return (
       <div className="flex justify-center items-start w-full ">
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
          {!params.id ? 'Añadir Cita' : 'Editar Cita'}
        </span>
                </a>
<div className='justify-center items-center'>
                {params.id ? (
                    <button
                        className="text-white bg-rose-900 border-0 justify-center items-center py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
                        onClick={handleDelete}
                    >
                        Eliminar Cita ID. {params.id}
                    </button>
                ) : (
                    <button
                        className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed "
                        disabled
                    >
                        Añadiendo Cita
                    </button>
                    )}
                    </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-gray-900">
      Fecha de Cita
    </label>
    <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-rose-500">
      Año-Mes-Día
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaTratamiento"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Tratamiento"
        {...register('fechaAgendado', { required: false })}
      />
    </div>
  </div>


                            </div>
                            
                            <div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label htmlFor="horaAgendado" className="block text-ls font-medium leading-6 text-gray-900">
      Hora Agendado
    </label>
    
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="time"
        id="horaAgendado"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Hora de la Cita"
                                            {...register('horaAgendado', { required: false })}
                                             step="3600"
      />
    </div>
  </div>


</div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 pr-5 pl-5">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Observaciones Generales  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="observaciones"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Observaciones"
      {...register('observaciones', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 pr-5 pl-5">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Motivo de la cita  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="motivo"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Motivo de la Cita"
      {...register('motivo', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                        </div>
                            <div className="px-5 pt-5 flex">





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
                                <label htmlFor="dpi" className="block text-ls font-medium leading-6 text-gray-900">
                                    DPI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="dpi"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Notas Cita"
                                        {...register('dpi', { required: false })}
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
                                    {!params.id ? 'Guardar Cita' : 'Modificar Cita'}
                                </button>
                              
                            </div>
                        </div>
                        
                    </form>
                       <div className="flex justify-center">
            <div className="text-neutral-400 items-center">Recuerda hacer Click sobre el campo de Paciente y DPI para ser válidos</div>
        </div>
                </div>
            </div>
       
            <div className="h-full items-start">
                <PatientListSearch/>
            </div>
        </div>

    );
}

export default CitasFormPage;
