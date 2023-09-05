"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSession } from "next-auth/react";


const PatientList = () => {
    const { data: session, status } = useSession();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        if (session?.user?.token) {
            fetchPacientes();
        }
    }, [session]);

    const fetchPacientes = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPatients(data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

        return (
            <div className=" shadow  align-middle ">
                <table className="w-max py-10 rounded-full">
                    <thead className="bg-rose-300 border-b-2 border-gray-200 rounded-full">
                    <tr className='rounded-full'>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">No ID.</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left ">Doc. Identificación</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Fecha de Nacimiento</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Edad</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Teléfono Contacto</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                    {patients.map((paciente) => (
                            <tr key={paciente['id']}>
                                <td className="p-1 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-black">{paciente['id']}</div>
                                    </div>
                                </td>
                                <td className="p-1 whitespace-nowrap">
                                    <div className="text-left text-black">{paciente['nombrePaciente']}</div>
                                </td>
                                <td className="p-1 whitespace-nowrap">
                                    <div
                                        className="text-left font-medium text-rose-900">{paciente['docIdentificacion']}</div>
                                </td>

                                <td className="p-1 whitespace-nowrap">
                                    <div className="text-left text-black">{paciente['fechaNacimiento']}</div>
                                </td>

                                <td className="p-1 whitespace-nowrap">
                                    <div className="text-left text-rose-900">{paciente['edadPaciente']}</div>
                                </td>
                                <td className="p-1 whitespace-nowrap">
                                    <div className="text-left text-black">{paciente['telefono']}</div>
                                </td>
                                <td className="p-1 whitespace-nowrap">
                                    <div className='pr-5 pl-5'>


                                        <Link href={`/sys/dashboard/pacientes/${paciente['id']}`}>
                                            <button
                                                className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-300  hover:text-black rounded text-lg">
                                                Editar
                                            </button>
                                        </Link>

                                    </div>

                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        );
    };

export default PatientList;