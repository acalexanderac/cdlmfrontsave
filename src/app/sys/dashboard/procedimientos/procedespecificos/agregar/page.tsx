"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';

interface FormData {
    fechaTratamiento: string;
    tipoAnestesia: string;
    anestesia: boolean;
    observaciones: string;
    patient: string;
    treatmentype: string;
}

function TreatmentFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
        fechaTratamiento: '',
        tipoAnestesia: '',
        anestesia: false,
        observaciones: '',
        patient: '',
        treatmentype: '',
    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`http://localhost:3001/api/v1/treatments/${params.id}`, {
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
                const pacienteName = dataUpdate.patient?.docIdentificacion || '';
                const treatmentTypeName = dataUpdate.treatmentype?.name || '';

                // Debugging: Log the extracted values


                // Update the local state with the extracted data
                setNewProcedimiento((prevState) => ({
                    ...prevState || {},
                    fechaTratamiento: String(dataUpdate.fechaTratamiento || ''),
                    tipoAnestesia: String(dataUpdate.tipoAnestesia || ''),
                    anestesia: dataUpdate.anestesia || false,
                    observaciones: String(dataUpdate.observaciones || ''),
                    patient: String(pacienteName.toString() || ''),            // Ensure it's a string
                    treatmentype: String(treatmentTypeName.toString() || ''),  // Ensure it's a string
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
                await axios.delete(`http://localhost:3001/api/v1/treatments/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/procedimientos/procedespecificos');
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
                fechaTratamiento: data.fechaTratamiento,
                tipoAnestesia: data.tipoAnestesia,
                anestesia: data.anestesia,
                observaciones: data.observaciones,
                patient: data.patient.toString(), // Convert patient object to string
                treatmentype: data.treatmentype.toString(), // Convert treatmentype object to string
            };

            await axios.patch(`http://localhost:3001/api/v1/treatments/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/procedimientos/procedespecificos');
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
                    'http://localhost:3001/api/v1/treatments',
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
                router.push('/sys/dashboard/procedimientos/procedespecificos');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                toast.error("This didn't work.");
            }
        } else {
            await updateTask(data);
        }
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <Toaster />

            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
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

                <span className="ml-3 text-2xl font-serif">
          {!params.id ? 'Añadir Procedimiento' : 'Editar Procedimiento'}
        </span>
            </a>

            {params.id ? (
                <button
                    className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
                    onClick={handleDelete}
                >
                    Eliminar Procedimiento ID. {params.id}
                </button>
            ) : (
                <button
                    className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed"
                    disabled
                >
                    Añadiendo Procedimiento
                </button>
            )}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="px-5 pt-5">
                            <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-gray-900">
                                Fecha de Tratamiento
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
                                    {...register('fechaTratamiento', { required: false })}
                                />
                            </div>
                        </div>

                        <div className="px-5">
                            <label htmlFor="tipoAnestesia" className="block text-ls font-medium text-gray-900">
                                Tipo Anestesia
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="tipoAnestesia"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20
                  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-1/2"
                                    placeholder="DPI Paciente"
                                    {...register('tipoAnestesia', { required: false })}
                                />
                            </div>
                        </div>

                        <div className="px-5 pt-5 flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-4">
                                <label htmlFor="anestesia" className="block text-ls font-medium text-gray-900">
                                    Anestesia
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="checkbox"
                                        id="anestesia"
                                        className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                        {...register('anestesia')}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="observaciones" className="block text-ls font-medium text-gray-900">
                                    Observaciones
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="observaciones"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Observaciones"
                                        {...register('observaciones', { required: false })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 pt-5 flex flex-wrap">
                        <div className="w-full md:w-1/2 pr-4">
                            <div>
                                <label htmlFor="patient" className="block text-ls font-medium leading-6 text-gray-900">
                                    Pacientes
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="patient" // Use 'patient' here if it's the field name in your form
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="ID Pacientes"
                                        {...register('patient', { required: false })}
                                        value={newProcedimiento.patient.toString()}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pl-4">
                            <label htmlFor="treatmentype" className="block text-ls font-medium leading-6 text-gray-900">
                                Tipo Tratamiento
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="treatmentype"
                                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="ID Tipo Tratamiento"
                                    {...register('treatmentype', { required: false })}
                                    value={newProcedimiento.treatmentype.toString()}
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
                                {!params.id ? 'Guardar Procedimiento General' : 'Modificar Procedimiento General'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TreatmentFormPage;
