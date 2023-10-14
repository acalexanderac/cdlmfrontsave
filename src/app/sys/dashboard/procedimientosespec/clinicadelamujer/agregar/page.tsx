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
 fechaClinicadelamujer: string;
  antefamiliar: string;
  antepersonal: string;
  antequirurgico: string;
  antetraumatico: string;
  antealergico: string;
  antealimenticio: string;
  fuma: boolean;
  regularidad: string;
  anticonceptivo: boolean;
  tipoanticonceptivo: string;
  fechaanticonceptivo: string;
  medicina: boolean;
  medicinadescripcion: string;
  menarg: string;
  menarhv: string;
  menarab: string;
  menarfc: string;
  menarim: string;
  menarfur: string;
  menopausia: string;
  expa: string;
  exfr: string;
  exfc: string;
  ext: string;
  k1: string;
  k2: string;
  k3: string;
  p1: string;
  p2: string;
  p3: string;
  dpi: string;
  procedimiento: string;
  fechaprocedimiento: string;
  horaprocedimiento: string;
  observaciones: string;
  anestesia: boolean;
  tipoAnestesia: string;
  paciente: string;
}

function ClinicaFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
        fechaClinicadelamujer: "",
        antefamiliar: "",
        antepersonal: "",
        antequirurgico: "",
        antetraumatico: "",
        antealergico: "",
        antealimenticio: "",
        fuma: false,
        regularidad: "",
        anticonceptivo: false,
        tipoanticonceptivo: "",
        fechaanticonceptivo: "",
        medicina: false,
        medicinadescripcion: "",
        menarg: "",
        menarhv: "",
        menarab: "",
        menarfc: "",
        menarim: "",
        menarfur: "",
        menopausia: "",
        expa: "",
        exfr: "",
        exfc: "",
        ext: "",
        k1: "",
        k2: "",
        k3: "",
        p1: "",
        p2: "",
        p3: "",
        dpi: "",
        procedimiento: "",
        fechaprocedimiento: "",
        horaprocedimiento: "",
        observaciones: "",
        anestesia: false,
        tipoAnestesia: "",
        paciente: "",
    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`http://localhost:3001/api/v1/clinicadelamujer/${params.id}`, {
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
                                        fechaClinicadelamujer: String(dataUpdate.fechaClinicadelamujer || ''),
                    antefamiliar: String(dataUpdate.antefamiliar || ''),
                    antepersonal: String(dataUpdate.antepresonal || ''),
                    antequirurgico: String(dataUpdate.antequirurgico || ''),
                    antetraumatico: String(dataUpdate.antetraumatico || ''),
                    antealergico: String(dataUpdate.antealergico || ''),
                    antealimenticio: String(dataUpdate.antealimenticio || ''),
                    fuma: Boolean(dataUpdate.fechaTratamiento || false || null),
                    regularidad: String(dataUpdate.refularidad || ''),
                    anticonceptivo: Boolean(dataUpdate.anticonceptivo || false || null),
                    tipoanticonceptivo: String(dataUpdate.tipoanticonceptivo || ''),
                    fechaanticonceptivo: String(dataUpdate.fechaantiiconceptivo || ''),
                    medicina: Boolean(dataUpdate.medicina || false || null),
                    medicinadescripcion: String(dataUpdate.medicinadescripcion || ''),
                    menarg: String(dataUpdate.menarg || ''),
                    menarhv: String(dataUpdate.menarhv || ''),
                    menarab: String(dataUpdate.menarab || ''),
                    menarfc: String(dataUpdate.menarfc || ''),
                    menarim: String(dataUpdate.menarim || ''),
                    menarfur:  String(dataUpdate.menarfur || ''),
                    menopausia: String(dataUpdate.menopausia || ''),
                    expa: String(dataUpdate.expa || ''),
                    exfr: String(dataUpdate.exfr || ''),
                    exfc: String(dataUpdate.exfc || ''),
                    ext: String(dataUpdate.ext || ''),
                    k1: String(dataUpdate.k1 || ''),
                    k2: String(dataUpdate.k2 || ''),
                    k3: String(dataUpdate.k3 || ''),
                    p1: String(dataUpdate.p1 || ''),
                    p2: String(dataUpdate.p2 || ''),
                    p3: String(dataUpdate.p3 || ''),
                    dpi: String(dataUpdate.dpi || ''),
                    procedimiento: String(dataUpdate.procedimiento || ''),
                    fechaprocedimiento: String(dataUpdate.fechaprocedimiento || ''),
                    horaprocedimiento: String(dataUpdate.horaprocedimiento || ''),
                    observaciones: String(dataUpdate.observaciones || ''),
                    anestesia: Boolean(dataUpdate.anestesia || false || null),
                    tipoAnestesia: String(dataUpdate.tipoAnestesia || ''),
                     paciente: pacienteName || '', // Ensure it's a string
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
                await axios.delete(`http://localhost:3001/api/v1/clinicadelamujer/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/procedimientosespec/clinicadelamujer');
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
                fechaClinicadelamujer: data.fechaClinicadelamujer,
                antefamiliar: data.antefamiliar,
                antepersonal: data.antepersonal,
                antequirurgico: data.antequirurgico,
                antetraumatico: data.antetraumatico,
                antealergico: data.antealergico,
                antealimenticio: data.antealimenticio,
                fuma: data.fuma,
                regularidad: data.regularidad,
                anticonceptivo: data.anticonceptivo,
                tipoanticonceptivo: data.tipoanticonceptivo,
                fechaanticonceptivo: data.fechaanticonceptivo,
                medicina: data.medicina,
                medicinadescripcion: data.medicinadescripcion,
                      menarg: data.menarg ,
                    menarhv: data.menarhv ,
                    menarab: data.menarab ,
                    menarfc: data.menarfc ,
                    menarim: data.menarim ,
                    menarfur:  data.menarfur ,
                    menopausia: data.menopausia ,
                    expa: data.expa ,
                    exfr: data.exfr ,
                    exfc: data.exfc ,
                    ext: data.ext ,
                    k1: data.k1 ,
                    k2: data.k2 ,
                    k3: data.k3 ,
                    p1: data.p1 ,
                    p2: data.p2 ,
                    p3: data.p3 ,
                    procedimiento: data.procedimiento ,
                    fechaprocedimiento: data.fechaprocedimiento ,
                    horaprocedimiento: data.horaprocedimiento ,
                    observaciones: data.observaciones ,
                    anestesia: data.anestesia ,
                    tipoAnestesia: data.tipoAnestesia ,
                paciente: data.paciente.toString(), // Convert patient object to string
                dpi: data.dpi,
            };

            await axios.patch(`http://localhost:3001/api/v1/clinicadelamujer/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/procedimientosespec/clinicadelamujer');
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
                    'http://localhost:3001/api/v1/clinicadelamujer',
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
    <label htmlFor="fechaClinicadelamujer" className="block text-ls font-medium leading-6 text-gray-900">
      Fecha Registro de Tratamiento
    </label>
    <label htmlFor="fechaClinicadelamujer" className="block text-ls font-medium leading-6 text-rose-500">
      Año-Mes-Día
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        id="fechaClinicadelamujer"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Tratamiento"
        {...register('fechaClinicadelamujer', { required: false })}
      />
    </div>
  </div>

</div>

 <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
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

                            <div className="w-full md:w-2/3 pl-4">
                                <label htmlFor="dpi" className="block text-ls font-medium leading-6 text-gray-900">
                                    DPI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="dpi"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="DPI"
                                        {...register('dpi', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                          <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES
                                </label>
                                </div>   
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="antepersonal" className="block text-ls font-medium leading-6 text-gray-900">
                                            Antecedente Personal
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="antepersonal" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Personal"
                                                {...register('antepersonal', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="notasCrioterapia" className="block text-ls font-medium leading-6 text-gray-900">
                                    Antecendente Quirúrgico
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="notasCrioterapia"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Quirúrgico"
                                        {...register('antequirurgico', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="antetra" className="block text-ls font-medium leading-6 text-gray-900">
                                    Antecendente Traumático
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="antetrauma"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Traumático"
                                        {...register('antetraumatico', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                              <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="antealergico" className="block text-ls font-medium leading-6 text-gray-900">
                                            Antecedente Alérgico
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="antealergico" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Alérgico"
                                                {...register('antealergico', { required: false })}
                                                value={newProcedimiento.paciente.toString()}
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="notasCrioterapia" className="block text-ls font-medium leading-6 text-gray-900">
                                    Antecendente Alimenticio
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="atealimenticio"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Alimenticio"
                                        {...register('antealimenticio', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="antef" className="block text-ls font-medium leading-6 text-gray-900">
                                    Antecendente Familiar
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="antefam"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Familiar"
                                        {...register('antefamiliar', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>   
                        
                        <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       HÁBITOS
                                </label>
                                </div>
 <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="fumar" className="block text-ls font-medium text-gray-900">
                                        Fuma
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fuma"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fuma', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 pl-4">
                                    <label htmlFor="notascuadrantesuperiorizq" className="block text-ls font-medium text-gray-900">
Regularidad                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="notascuadrantesuperiorizq"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Regularidad Fumar"
                                            {...register('regularidad', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>


                         <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="antic" className="block text-ls font-medium text-gray-900">
                                        Anticonceptivo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="anticonceptivo"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('anticonceptivo', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 pl-4">
                                    <label htmlFor="tipoantico" className="block text-ls font-medium text-gray-900">
                                        Tipo Anticonceptivo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="tipoantic"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Tipo Anticonceptivo"
                                            {...register('tipoanticonceptivo', { required: false })}
                                        />
                                    </div>
                            </div>
                            
                              <div className="w-full md:w-1/3 pl-4">
    <label htmlFor="fechaTratamiento" className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Anticonceptivo 
                                     <a className='text-rose-500 pl-3'>Año-Mes-Día</a>
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        id="fechaTratamiento"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Anticonceptivo"
        {...register('fechaanticonceptivo', { required: false })}
      />
    </div>
  </div>
                            </div>


                        <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="medic" className="block text-ls font-medium text-gray-900">
                                        Medicina Prescrita/Reciente
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="medicina"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('medicina', { required: false })}
                                        />
                                    </div>
                                </div>

                               <div className="w-full md:w-1/3 pl-4">

                                    <label htmlFor="medicdes" className="block text-ls font-medium text-gray-900">
¿Cuáles?                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="medicinadesc"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Medicinas"
                                            {...register('medicinadescripcion', { required: false })}
                                        />
                                    </div>
                                </div>
                        </div>
<div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       MENARQUÍA
                                </label>
                                </div>
                        <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="antepersonal" className="block text-ls font-medium leading-6 text-gray-900">
                                            Menarquía G
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="antepersonal" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Menarquía G"
                                                {...register('menarg', { required: false })}
                                              
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="menarhv" className="block text-ls font-medium leading-6 text-gray-900">
                                    Menarquía HV
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="menarh"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Menarquía HV"
                                        {...register('menarhv', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="antetra" className="block text-ls font-medium leading-6 text-gray-900">
                                    Menarquía AB
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="antetrauma"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Menarquía AB"
                                        {...register('menarab', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>    
                                                <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="antepersonal" className="block text-ls font-medium leading-6 text-gray-900">
                                           Menarquía FC
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="antepersonal" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Menarquía FC"
                                                {...register('menarfc', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="menarhv" className="block text-ls font-medium leading-6 text-gray-900">
                                    Menarquía HV
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="menarh"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Menarquía HV"
                                        {...register('menarhv', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            
                        </div>  

                                                                        <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="antepersonal" className="block text-ls font-medium leading-6 text-gray-900">
                                           Menarquía FUR
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="antepersonal" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Menarquía FUR"
                                                {...register('menarfur', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                        </div>  

                        <div className='px-5 py-5'>
                            <label htmlFor="nombrePaciente" className="block text-ls font-medium leading-6 text-gray-900">
                                Menopausia
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">

                                <input
                                    type="text"

                                    id="nombrePaciente"
                                    className="block rounded-md border-0 py-1.5 pl-7
                                    pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                    placeholder="Menopausia"
                                    {...register("menopausia", { required: false})}
                                    onChange={handleChange}
                                   
                                />
                               
                            </div>

                        </div>

                        


</div>//fin de la primera parte
                            

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

export default ClinicaFormPage;
