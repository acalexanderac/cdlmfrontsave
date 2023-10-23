"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import PatientListSearch from '../../../pacientes/pacientes.components/search';
interface FormData {
fechaControlnatal: string; 
    diabetespersonal: boolean; 
    hipertension: boolean;
    infertilidad: boolean;
    sxconvulsivo: boolean;
    nefropatia: boolean;
    cardiopatia: boolean;
    otropersonal: string;
    diabetesfamiliar: boolean;
    embarazogemelar: boolean;
    anomaliascongenitas: boolean;
    hipertensionarterial: boolean;
    otrofamiliar: string;
    antecedentesquirurgicos: boolean;
    otrosquirurgicos: string;
    antecedentestraumaticos: boolean;
    otrostraumaticos: string;
    antecedentesalergicos: boolean;
    otrosalergicos: string;
    gestas: string;
    abortos: string;
    ningunoMas3partos: boolean;
    RNmenor2500: boolean;
    gemelares: boolean;
    partos: string;
    vaginales: string;
    cesareas: string;
    nacidosvivos: string;
    nacidosmuertos: string;
    viven: string;
    muertos1semana: string;
    muertosdespues1semana: string;
    fechaUltimoembarazo: string;
    RNpesomenor5lbs: boolean;
    RNpesomayor8lbs: boolean;
    RNconmayorpeso: string;
    embarazoActual: string;
    confiable: boolean;
    antitetanica: boolean;
    hospitalizacion: boolean;
    motivoHospitalizacion: string;
   fechaHospitalizacion: string;
    fuma: boolean;
    pesoanterior: string;
    talla: string
    fur: string;
    fpp: string;
    fecharegistro: string;
    valseg: string;
    ri: string;
    psalgunavez: boolean;
    psultimos12meses: boolean;
    pspareja: boolean;
    fialgunavez: boolean;
    fiultimos12meses: boolean;
    fipareja: boolean;
    sxalgunavez: boolean;
    sxultimos12meses: boolean;
    sxpareja: boolean;
    an_algunavez: boolean;
    an_ultimos12meses: boolean;
    an_pareja: boolean;
    dpi: string;
    paciente:string;
}

function ControlNatalFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
    fechaControlnatal: '', 
    diabetespersonal: false, 
    hipertension: false,
    infertilidad: false,
    sxconvulsivo: false,
    nefropatia: false,
    cardiopatia: false,
    otropersonal: '',
    diabetesfamiliar: false,
    embarazogemelar: false,
    anomaliascongenitas: false,
    hipertensionarterial: false,
    otrofamiliar: '',
    antecedentesquirurgicos: false,
    otrosquirurgicos: '',
    antecedentestraumaticos: false,
    otrostraumaticos: '',
    antecedentesalergicos: false,
    otrosalergicos: '',
    gestas: '',
    abortos: '',
    ningunoMas3partos: false,
    RNmenor2500: false,
    gemelares: false,
    partos: '',
    vaginales: '',
    cesareas: '',
    nacidosvivos: '',
    nacidosmuertos: '',
    viven: '',
    muertos1semana: '',
    muertosdespues1semana: '',
    fechaUltimoembarazo: '',
    RNpesomenor5lbs: false,
    RNpesomayor8lbs: false,
    RNconmayorpeso: '',
    embarazoActual: '',
    confiable: false,
    antitetanica: false,
    hospitalizacion: false,
    motivoHospitalizacion: '',
   fechaHospitalizacion: '',
    fuma: false,
    pesoanterior: '',
    talla: '',
    fur: '',
    fpp: '',
    fecharegistro: '',
    valseg: '',
    ri: '',
    psalgunavez: false,
    psultimos12meses: false,
    pspareja: false,
    fialgunavez: false,
    fiultimos12meses: false,
    fipareja: false,
    sxalgunavez: false,
    sxultimos12meses: false,
    sxpareja: false,
    an_algunavez: false,
    an_ultimos12meses: false,
    an_pareja: false,
    dpi: '',
    paciente:'',
    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/controlnatal/${params.id}`, {
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
    fechaControlnatal: String(dataUpdate.fechaControlnatal || '' || null), 
    diabetespersonal: Boolean (dataUpdate.diabetespersonal || false || null), 
    hipertension: Boolean (dataUpdate.hipertension || false || null),
    infertilidad: Boolean (dataUpdate.infertilidad || false || null),
    sxconvulsivo: Boolean (dataUpdate.sxconvulsivo || false || null),
    nefropatia: Boolean (dataUpdate.nefropatia || false || null),
    cardiopatia: Boolean (dataUpdate.cardiopatia || false || null),
    otropersonal: String(dataUpdate.otropersonal || '' || null),
    diabetesfamiliar: Boolean(dataUpdate.diabetesfamiliar || false || null) ,
    embarazogemelar: Boolean(dataUpdate.embarazogemelar || false || null),
    anomaliascongenitas: Boolean(dataUpdate.anomaliascongenitas || false || null),
    hipertensionarterial: Boolean(dataUpdate.hipertensionarterial || false || null),
    otrofamiliar: String(dataUpdate.otrofamiliar || '' || null),
    antecedentesquirurgicos: Boolean(dataUpdate.antecedentesquirurgicos || false || null),
    otrosquirurgicos: String(dataUpdate.otrosquirurgicos || '' || null),
    antecedentestraumaticos: Boolean(dataUpdate.antecedentestraumaticos || false || null),
    otrostraumaticos: String(dataUpdate.otrostraumaticos || '' || null),
    antecedentesalergicos: Boolean(dataUpdate.antecedentesalergicos || false || null),
    otrosalergicos: String(dataUpdate.otrosalergicos || '' || null),
    gestas: String(dataUpdate.gestas || '' || null),
    abortos: String(dataUpdate.abortos || '' || null),
    ningunoMas3partos: Boolean(dataUpdate.ningunoMas3partos || false || null),
    RNmenor2500: Boolean(dataUpdate.RNmenor2500 || false || null),
    gemelares: Boolean(dataUpdate.gemelares || false || null),
    partos: String(dataUpdate.partos || '' || null),
    vaginales: String(dataUpdate.vaginales || '' || null),
    cesareas: String(dataUpdate.cesareas || '' || null),
    nacidosvivos: String(dataUpdate.nacidosvivos || '' || null),
    nacidosmuertos: String(dataUpdate.nacidosmuertos || '' || null),
    viven: String(dataUpdate.viven || '' || null),
    muertos1semana: String(dataUpdate.muertos1semana || '' || null),
    muertosdespues1semana: String(dataUpdate.muertosdespues1semana || '' || null),
    fechaUltimoembarazo: String(dataUpdate.fechaUltimoembarazo || '' || null),
    RNpesomenor5lbs: Boolean(dataUpdate.RNpesomenor5lbs || false || null),
    RNpesomayor8lbs: Boolean(dataUpdate.RNpesomayor8lbs || false || null),
    RNconmayorpeso: String(dataUpdate.RNconmayorpeso || '' || null),
    embarazoActual: String(dataUpdate.embarazoActual || '' || null),
    confiable: Boolean(dataUpdate.confiable || false || null),
    antitetanica: Boolean(dataUpdate.antitetanica || false || null),
    hospitalizacion: Boolean(dataUpdate.hospitalizacion || false || null),
    motivoHospitalizacion: String(dataUpdate.motivoHospitalizacion || '' || null),
   fechaHospitalizacion: String(dataUpdate.fechaHospitalizacion || '' || null),
    fuma: Boolean(dataUpdate.fuma || false || null),
    pesoanterior: String(dataUpdate.pesoanterior || '' || null),
    talla: String(dataUpdate.talla || '' || null),
    fur: String(dataUpdate.fur || '' || null),
    fpp: String(dataUpdate.fpp || '' || null),
    fecharegistro: String(dataUpdate.fecharegistro || '' || null),
    valseg: String(dataUpdate.valseg || '' || null),
    ri: String(dataUpdate.ri || '' || null),
    psalgunavez: Boolean(dataUpdate.psalgunavez || false || null),
    psultimos12meses: Boolean(dataUpdate.psultimos12meses || false || null),
    pspareja: Boolean(dataUpdate.pspareja || false || null),
    fialgunavez: Boolean(dataUpdate.fialgunavez || false || null),
    fiultimos12meses: Boolean(dataUpdate.fiultimos12meses || false || null),
    fipareja: Boolean(dataUpdate.fipareja || false || null),
    sxalgunavez: Boolean(dataUpdate.sxalgunavez || false || null),
    sxultimos12meses: Boolean(dataUpdate.sxultimos12meses || false || null),
    sxpareja: Boolean(dataUpdate.sxpareja || false || null),
    an_algunavez: Boolean(dataUpdate.an_algunavez || false || null),
    an_ultimos12meses: Boolean(dataUpdate.an_ultimos12meses || false || null),
    an_pareja: Boolean(dataUpdate.an_pareja || false || null),
    dpi: String(dataUpdate.dpi || '' || null),
   paciente: pacienteName || '',        
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
        setValue('fechaUltimoembarazo', '2000-01-01');
        setValue('fechaHospitalizacion', '2000-01-01');
        setValue('fecharegistro', '2000-01-01');
    }, [params.id, session]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/controlnatal/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/procedimientosespec/controlnatal');
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
                fechaControlnatal: data.fechaControlnatal,
                diabetespersonal: data.diabetespersonal , 
                hipertension: data.hipertension ,
                infertilidad: data.infertilidad,
                sxconvulsivo: data.sxconvulsivo,
                nefropatia: data.nefropatia,
                cardiopatia: data.cardiopatia,
                otropersonal: data.otropersonal,
                diabetesfamiliar: data.diabetesfamiliar,
                embarazogemelar: data.embarazogemelar,
                anomaliascongenitas: data.anomaliascongenitas,
                hipertensionarterial: data.hipertensionarterial,
                otrofamiliar: data.otrofamiliar,
                antecedentesquirurgicos: data.antecedentesquirurgicos,
                otrosquirurgicos: data.otrosquirurgicos,
                antecedentestraumaticos: data.antecedentestraumaticos,
                otrostraumaticos: data.otrostraumaticos,
                antecedentesalergicos: data.antecedentesalergicos,
                otrosalergicos: data.otrosalergicos,
                gestas: data.gestas,
                abortos: data.abortos,
                ningunoMas3partos: data.ningunoMas3partos,
                RNmenor2500: data.RNmenor2500,
                gemelares: data.gemelares,
                partos: data.partos,
                vaginales: data.vaginales,
                cesareas: data.cesareas,
                nacidosvivos: data.nacidosvivos,
                nacidosmuertos: data.nacidosmuertos,
                viven: data.viven,
                muertos1semana: data.muertos1semana,
                muertosdespues1semana: data.muertosdespues1semana,
                fechaUltimoembarazo: data.fechaUltimoembarazo,
                RNpesomenor5lbs: data.RNpesomenor5lbs,
                RNpesomayor8lbs: data.RNpesomayor8lbs,
                RNconmayorpeso: data.RNconmayorpeso,
                embarazoActual: data.embarazoActual,
                confiable: data.confiable,
                antitetanica: data.antitetanica,
                hospitalizacion: data.hospitalizacion,
                motivoHospitalizacion: data.motivoHospitalizacion,
                fechaHospitalizacion: data.fechaHospitalizacion,
                fuma: data.fuma,
                pesoanterior: data.pesoanterior,
                talla: data.talla,
                fur: data.fur,
                fpp: data.fpp,
                fecharegistro: data.fecharegistro,
                valseg: data.valseg,
                ri: data.ri,
                psalgunavez: data.psalgunavez,
                psultimos12meses: data.psultimos12meses,
                pspareja: data.pspareja,
                fialgunavez: data.fialgunavez,
                fiultimos12meses: data.fiultimos12meses,
                fipareja: data.fipareja,
                sxalgunavez: data.sxalgunavez,
                sxultimos12meses: data.sxultimos12meses,
                sxpareja: data.sxpareja,
                an_algunavez: data.an_algunavez,
                an_ultimos12meses: data.an_ultimos12meses,
                an_pareja: data.an_pareja,
                paciente: data.paciente.toString(), // Convert patient object to string
                dpi: data.dpi,
            };

            await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/controlnatal/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/procedimientosespec/controlnatal');
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
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/controlnatal`,
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
                router.push('/sys/dashboard/procedimientosespec/controlnatal');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                toast.error("Recuerda Validar DPI & Paciente");
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
          {!params.id ? 'Añadir Control Natal' : 'Editar Control Natal'}
        </span>
                </a>
<div className='justify-center items-center'>
                {params.id ? (
                    <button
                        className="text-white bg-rose-900 border-0 justify-center items-center py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
                        onClick={handleDelete}
                    >
                        Eliminar Control Natal ID. {params.id}
                    </button>
                ) : (
                    <button
                        className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed "
                        disabled
                    >
                        Añadiendo Control Natal
                    </button>
                    )}
                    </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label htmlFor="fechaControlnatal" className="block text-ls font-medium leading-6 text-gray-900">
      Fecha de Control Natal
    </label>
    
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaControlnatal"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Tratamiento"
        {...register('fechaControlnatal', { required: false })}
      />
    </div>
  </div>

</div>
 <div className="text-gray-400 items-center px-5 pt-5">Recuerda hacer Click sobre el campo de Paciente y DPI para ser válidos</div>
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
                                        placeholder="DPI"
                                        {...register('dpi' , { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
            <div>
<label  className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES PERSONALES
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="diabetespersonal" className="block text-ls font-medium text-gray-900">
                                        Diabetes 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="diabetespersonal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('diabetespersonal', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="infertilidad" className="block text-ls font-medium text-gray-900">
                                        Infertilidad
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="infertilidad"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('infertilidad', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="sxconvulsivo" className="block text-ls font-medium text-gray-900">
                                       Sx. Convulsivo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxconvulsivo"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxconvulsivo', { required: false })}
                                        />
                                    </div>
                                </div>
                          
                          

                            </div>                           

      <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="nefropatia" className="block text-ls font-medium text-gray-900">
                                        Nefropatía 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="nefropatia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('nefropatia', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cardiopatia" className="block text-ls font-medium text-gray-900">
                                        Cardiopatía
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cardiopatia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cardiopatia', { required: false })}
                                        />
                                    </div>
                                </div>

                                                              <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="hipertension" className="block text-ls font-medium text-gray-900">
                                        Hipertensión Crónica
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="hipertension"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('hipertension', { required: false })}
                                        />
                                    </div>
                                </div>
 
                          
                            </div>  
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label htmlFor="otropersonal" className="block text-ls font-medium leading-6 text-gray-900">
Explicación Antecedentes Personales  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otropersonal"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones"
      {...register('otropersonal', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                                </div>
                            
                                        <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES FAMILIARES
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="diabetesfamiliar" className="block text-ls font-medium text-gray-900">
                                        Diabetes 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="diabetesfamiliar"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('diabetesfamiliar', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="embarazogemelar" className="block text-ls font-medium text-gray-900">
                                        Embarazo Gemelar
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="embarazogemelar"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('embarazogemelar', { required: false })}
                                        />
                                    </div>
                                </div>

                          
                          

                            </div>                           

      <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="anomaliascongenitas" className="block text-ls font-medium text-gray-900">
                                        Anomalías Congénitas 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="anomaliascongenitas"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('anomaliascongenitas', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="hipertensionarterial" className="block text-ls font-medium text-gray-900">
                                        Hipertensión Arterial
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="hipertensionarterial"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('hipertensionarterial', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Explicación Antecedentes Familiares  / Tratamientos Realizados</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrofamiliar"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones"
      {...register('otrofamiliar', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                                </div>
                            <div>
<label  className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       OTROS ANTECEDENTES
                                </label>
                            </div>
 <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="antecedentesquirurgicos" className="block text-ls font-medium text-gray-900">
                                        Antecedentes Quirúrgicos
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="antecedentesquirurgicos"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('antecedentesquirurgicos', { required: false })}
                                        />
                                    </div>
                                </div>

<div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Explicación Antecedentes Quirúrgicos  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrosquirurgicos"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicación"
      {...register('otrosquirurgicos', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
<div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Antecedentes Traumáticos
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="antecedentestraumaticos"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('antecedentestraumaticos', { required: false })}
                                        />
                                    </div>
                                </div>

  <div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Explicación Antecedentes Traumáticos  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrostraumaticos"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones"
      {...register('otrostraumaticos', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
<div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="antecedentesalergicos" className="block text-ls font-medium text-gray-900">
                                        Antecedentes Alérgicos
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="antecedentesalergicos"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('antecedentesalergicos', { required: false })}
                                        />
                                    </div>
                                </div>

<div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Antecedentes Alérgicos  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrosalergicos"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones"
      {...register('otrosalergicos', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
<div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       GINECO-OBSTÉTRICOS
                                </label>
                            </div>
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="gestas" className="block text-ls font-medium leading-6 text-gray-900">
                                            Gestas
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="gestas" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Gestas"
                                                {...register('gestas', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="abortos" className="block text-ls font-medium leading-6 text-gray-900">
                                    Abortos
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="abortos"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Abortos"
                                        {...register('abortos', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>
                            <div>
                            <label className="block text-ls font-small text-rose-300 px-5 pt-5">
                                       PARTOS
                                </label>
                            </div>

          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="partos" className="block text-ls font-medium leading-6 text-gray-900">
                                           Partos
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="partos" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Partos"
                                                {...register('partos', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="cesareas" className="block text-ls font-medium leading-6 text-gray-900">
                                    Cesáreas
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="cesareas"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Cesáreas"
                                        {...register('cesareas', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="vaginales" className="block text-ls font-medium leading-6 text-gray-900">
                                    Vaginales
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="vaginales"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Vaginales"
                                        {...register('vaginales', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Nínguno o Más de 3 Partos 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="ningunoMas3partos"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('ningunoMas3partos', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Algún RN menor de 2500 g.
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="RNmenor2500"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('RNmenor2500', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="gemelares" className="block text-ls font-medium text-gray-900">
                                       Gemelares
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="gemelares"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('gemelares', { required: false })}
                                        />
                                    </div>
                                </div>
                          
                          

                            </div>  

          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            NACIDOS VIVOS
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="nacidosvivos" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Nacidos Vivos"
                                                {...register('nacidosvivos', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label  className="block text-ls font-medium leading-6 text-gray-900">
                                   Viven
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="viven"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Viven"
                                        {...register('viven', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>
                            
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            NACIDOS MUERTOS
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="nacidosmuertos" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Muertos"
                                                {...register('nacidosmuertos', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <div className="relative mt-2 rounded-md shadow-sm">

                                </div>
                            </div>
                            </div>
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                           Muertos Primera Semana.
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="muertos1semana" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Muertos 1a. Semana"
                                                {...register('muertos1semana', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>


                                    </div>

                                    <label  className="block text-ls font-medium text-gray-900">
RN Peso Menor 5 lb.                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="RNpesomenor5lbs"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('RNpesomenor5lbs', { required: false })}
                                        />
                                    </div>
                                   
                                    
                                    <label  className="block text-ls font-medium text-gray-900">
                                        RN Peso Mayor 8.5 lbs.
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="RNpesomayor8lbs"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('RNpesomayor8lbs', { required: false })}
                                        />
                                    </div>
                                
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    Muertos Después de la Primera Semana
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="muertosdespues1semana"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Muertos Después 1a Sem."
                                        {...register('muertosdespues1semana', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                              
                                <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    RN con Mayor Peso.
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="RNconmayorpeso"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="RN Mayor Peso"
                                        {...register('RNconmayorpeso', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>    
                            </div>
                            </div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
      Fecha Último Embarazo
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaUltimoembarazo"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de  Último Embarazo"
        {...register('fechaUltimoembarazo', { required: false })}
      />
    </div>
  </div>

</div>
<div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                      EMBARAZO ACTUAL
                                </label>
                            </div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
      Embarazo Actual 
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="embarazoActual"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de  Último Embarazo"
        {...register('embarazoActual', { required: false })}
      />
                                    </div>
                                                                        
                                </div>
                                                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="confiable" className="block text-ls font-medium text-gray-900">
                                        Confiable 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="confiable"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('confiable', { required: false })}
                                        />
                                    </div>
                                </div>
</div>
<div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="fuma" className="block text-ls font-medium text-gray-900">
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
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Antitetánica
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="antitetanica"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('antitetanica', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div>     
                            
                                                     <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        ¿Hospitalización durante el Embarazo?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="hospitalizacion"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('hospitalizacion', { required: false })}
                                        />
                                    </div>
                                </div>

  
                            
                              <div className="w-full md:w-1/3 pl-4">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Hospitalizacion
                                     <a className='text-rose-500 pl-3'>Año-Mes-Día</a>
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaHospitalizacion"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Hospitalización"
        {...register('fechaHospitalizacion', { required: false })}
      />
    </div>
  </div>
                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Motivo de la Hospitalización  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="motivoHospitalizacion"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Motivo de Hospitalización"
      {...register('motivoHospitalizacion', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                                </div>

  <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       DATOS GENERALES
                                </label>
                            </div>
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            Peso Anterior
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="pesoanterior" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Peso Anterior"
                                                {...register('pesoanterior', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    Talla
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="talla"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Talla"
                                        {...register('talla', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="fur" className="block text-ls font-medium leading-6 text-gray-900">
                                            FUR
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="fur" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="FUR"
                                                {...register('fur', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="fpp" className="block text-ls font-medium leading-6 text-gray-900">
                                    FPP
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="fpp"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="FPP"
                                        {...register('fpp', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>

                            <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-5">
                                       OTROS REGISTROS
                                </label>
                            </div>

                              <div className="w-full md:w-1/3 pl-4">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Registro
                                     <a className='text-rose-500 pl-3'>Año-Mes-Día</a>
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fecharegistro"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Registro"
        {...register('fecharegistro', { required: false })}
      />
    </div>
  </div>

                        
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="valseg" className="block text-ls font-medium leading-6 text-gray-900">
                                            ¿Val.seg?
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="valseg" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Val.seg?"
                                                {...register('valseg', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="ri" className="block text-ls font-medium leading-6 text-gray-900">
                                    RI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ri"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="RI"
                                        {...register('ri', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>

            <label  className=" block text-ls font-medium leading-6 text-gray-900  pt-5 pb-5">
                                    Acepto Ayuda?
                                </label>                 

          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            P S
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="psalgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('psalgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="psultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('psultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="pspareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('pspareja', { required: false })}
                                        />
                                    </div>
                                </div>
                          
                          

                            </div> 
                            </div>
                            </div>              
                        
          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            F I
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fialgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fialgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fiultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fiultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="fipareja" className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fipareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fipareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>  
                            
          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            S X
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxalgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxalgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxpareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxpareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>  

          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            A N
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_algunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_algunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_ultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_ultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_pareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_pareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
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
                                    {!params.id ? 'Guardar Registro Control Natal' : 'Modificar Registro Control Natal'}
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

export default ControlNatalFormPage;
