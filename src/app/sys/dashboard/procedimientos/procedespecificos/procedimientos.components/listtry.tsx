// pages/prodlist1.tsx
"use client"
import React, { useState, useEffect, useCallback } from 'react';


import Link from 'next/link';
import { useSession } from 'next-auth/react';

// Define the Treatment interface
interface Treatment {
    id: number;
    fechaTratamiento: string;
    tipoAnestesia: string;
    anestesia: boolean;
    observaciones: string;
    paciente: {
        id: number;
        docIdentificacion: string;
        nombrePaciente: string;
    };
    treatmentype: {
        id: number;
        name: string;
    };
}

const ProdList1: React.FC = () => {
    const { data: session } = useSession();
    const [patients, setPatients] = useState<Treatment[]>([]);
    const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const fetchPacientes = useCallback(async (page: number) => {
        try {
            // Fetch data from the backend API based on search terms, sort order, and page
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/treatments`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                }
            );

            if (!response.ok) {
                // Handle HTTP error responses here
                const errorData = await response.json();
                console.error('Network response was not ok:', errorData);
                return;
            }

            const data = await response.json();

            // Update state with the fetched data
            setPatients(data as Treatment[]);
        } catch (error) {
            console.error('Error fetching patients:', error);
            // Handle unexpected errors here and display an error message to the user
        }
    }, [session]);

    useEffect(() => {
        if (session?.user?.token) {
            // Fetch data when the component mounts and when session or search/sort terms change
            fetchPacientes(currentPage);
        }
    }, [session, currentPage, fetchPacientes]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            fetchPacientes(newPage);
        }
    };

    const handleSortOrderChange = (newOrder: 'ASC' | 'DESC') => {
        setSortOrder(newOrder);
    };

    const handleSearch = () => {
        // Reset the current page to 1 when performing a new search
        setCurrentPage(1);
        fetchPacientes(1);
    };

    return (
        <div className="align-middle flex items-center flex-col">
            <div className="pb-5 flex space-x-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder="Buscar Paciente CDLM"
                    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 w-full"
                />
                <button onClick={handleSearch} className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">
                    Buscar
                </button>
            </div>
            <div className="pb-2 flex space-x-4 items-center">
                <button
                    onClick={() => handleSortOrderChange('ASC')}
                    className="flex items-center text-rose-900 bg-white border-0 py-2 px-6 focus:outline-none rounded"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                    Ordenar ASC
                </button>
                <button
                    onClick={() => handleSortOrderChange('DESC')}
                    className="flex items-center text-rose-900 bg-white border-0 py-2 px-6 focus:outline-none rounded"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M3 12h18" />
                    </svg>
                    Ordenar DESC
                </button>
            </div>
            <div className="align-middle flex items-center flex-col pb-5">
                <table className="py-10 rounded-full pt-5 pb-10 w-1/2">
                    <thead className="bg-rose-300 border-b-2 border-gray-200 rounded-full pt-5 pb-10">
                    <tr className="rounded-full pb-5">
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">No ID.</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Fecha Tratamiento</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Tipo Anestesia</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Anestesia</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Observaciones</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">DPI Paciente</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Paciente</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Tipo Tratamiento</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 pb-5 pt-10">
                    {patients.map((tratamiento) => (
                        <tr key={tratamiento.id}>
                            <td className="p-1 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="font-medium text-black">{tratamiento.id}</div>
                                </div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left text-black">{tratamiento.fechaTratamiento}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left font-medium text-rose-900">{tratamiento.tipoAnestesia}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left text-black">{tratamiento.anestesia}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left text-rose-900">{tratamiento.observaciones}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left text-black">{tratamiento.paciente?.docIdentificacion || 'ID no disponible'}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="text-left text-black">{tratamiento.paciente?.nombrePaciente || 'ID no disponible'}</div>
                            </td>
                            <td className="p-1 whitespace-nowrap">{tratamiento.treatmentype?.name || 'Tipo no disponible'}</td>
                            <td className="p-1 whitespace-nowrap">
                                <div className="pr-5 pl-5">
                                    <Link href={`/sys/dashboard/procedimientos/procedespecificos/${tratamiento.id}`}>
                                        <button className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-300 hover:text-black rounded text-lg">
                                            Editar
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between w-full">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center text-rose-900 bg-white border-0 px-2 focus:outline-none pl-5 rounded space-x-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                    <span>Anterior</span>
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center text-rose-900 bg-white border-0 px-2 focus:outline-none pl-5 rounded space-x-1"
                >
                    <span>Siguiente</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5-7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProdList1;
