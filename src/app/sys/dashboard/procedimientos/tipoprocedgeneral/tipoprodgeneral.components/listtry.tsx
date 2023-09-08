"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const TipoProdList2: React.FC = () => {
    interface TipoProdc {
        id: number;
        name: string;
    }

    const { data: session } = useSession();
    const [tipoprod, setTipoProd] = useState<TipoProdc[]>([]); // Specify the type here
    const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC'); // Estado para el ordenamiento
const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');



    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
};

  useEffect(() => {
    if (session?.user?.token) {
        fetchTipoT(currentPage);
    }
}, [session, currentPage, sortOrder]);

  const fetchTipoT = async (page: number) => {
       try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/treatmentypes/sort?s=${searchTerm}&sort=${sortOrder}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTipoProd(data.data);
        setTotalPages(data.last_page);
    } catch (error) {
        console.error('Error fetching tratamientos:', error);
    }
};

const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        fetchTipoT(newPage);
    }
};

    // Función para cambiar el ordenamiento cuando el usuario hace clic en un botón
    const handleSortOrderChange = (newOrder: 'ASC' | 'DESC') => {
        setSortOrder(newOrder);
    };

    const handleSearch = () => {
    // Reiniciar la página a la primera página al realizar una nueva búsqueda
    setCurrentPage(1);
    fetchTipoT(1); // Inicia la búsqueda en la primera página
};

    return (
        <div className=" align-middle flex items-center flex-col ">


            <div className=' pb-5 flex space-x-4'>
                <input
    type="text"
    value={searchTerm}
    onChange={handleSearchTermChange}
    placeholder="Buscar Tipo Procedimiento"
    className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
    laceholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 w-full"
                />
                <button onClick={() => handleSearch()}
                        className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">
                    Buscar</button>


        </div>
            {/* Controles de ordenamiento */}
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                    Ordenar DESC
                </button>
            </div>
            <div className="align-middle flex items-center flex-col pb-5">
                <table className="py-10 rounded-full pt-5 pb-10 w-1/2 ">
            <thead className="bg-rose-300 border-b-2 border-gray-200 rounded-full pt-5 pb-10">
                <tr className='rounded-full pb-5'>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">No ID.</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>

                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Acciones</th>
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 pb-5 pt-10">
                {tipoprod.map((tipoprodc: TipoProdc) => (
                    <tr key={tipoprodc['id']}>
                        <td className="p-1 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="font-medium text-black">{tipoprodc['id']}</div>
                            </div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left text-black">{tipoprodc['name']}</div>
                        </td>

                        <td className="p-1 whitespace-nowrap">
                            <div className='pr-5 pl-5'>
                                <Link href={`/sys/dashboard/procedimientos/tipoprocedgeneral/${tipoprodc['id']}`}>
                                    <button
                                        className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-300  hover:text-black rounded text-lg">
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>


        </div>
    );
};

export default TipoProdList2;
